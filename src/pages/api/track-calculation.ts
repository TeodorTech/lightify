/**
 * Salveaza in Neon (Postgres) fiecare calcul facut in calculatorul de pret.
 *
 * Primeste doar configuratia, nu si pretul: pretul se recalculeaza aici cu
 * acelasi estimate() ca in pagina, ca in baza sa ajunga exact ce a vazut
 * clientul, nu ce ar putea trimite cineva de mana. model_version = commit-ul
 * de pe Vercel, ca la verificarea lunara sa stim ce versiune de PRICING a dat
 * fiecare pret.
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { neon } from "@neondatabase/serverless";
import { PRICING, estimate } from "../../lib/pricing";
import type { EstimateInput } from "../../lib/pricing";

const MAX_TEXT_LENGTH = 60; // la fel ca maxLength din PriceEstimator

const oneOf = <T extends string>(value: unknown, allowed: readonly T[]): value is T =>
  typeof value === "string" && (allowed as readonly string[]).includes(value);

/** Accepta doar valori pe care calculatorul le poate produce. Orice altceva -> null. */
function parseInput(body: unknown): EstimateInput | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  if (
    !oneOf(b.kind, ["text", "logo"] as const) ||
    typeof b.text !== "string" || b.text.length > MAX_TEXT_LENGTH ||
    !oneOf(b.size, Object.keys(PRICING.sizes) as EstimateInput["size"][]) ||
    !oneOf(b.stroke, ["single", "double"] as const) ||
    typeof b.graphic !== "boolean" ||
    !oneOf(b.category, Object.keys(PRICING.categories) as EstimateInput["category"][]) ||
    typeof b.rgb !== "boolean" ||
    !oneOf(b.delivery, Object.keys(PRICING.delivery) as EstimateInput["delivery"][]) ||
    typeof b.logoWidthCm !== "number" || !Number.isFinite(b.logoWidthCm) ||
    !oneOf(b.logoComplexity, ["simplu", "mediu", "detaliat"] as const)
  ) {
    return null;
  }

  return {
    kind: b.kind,
    text: b.text,
    size: b.size,
    stroke: b.stroke,
    graphic: b.graphic,
    category: b.category,
    rgb: b.rgb,
    delivery: b.delivery,
    logoWidthCm: b.logoWidthCm,
    logoComplexity: b.logoComplexity,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const input = parseInput(req.body);
  const est = input && estimate(input);
  if (!input || !est) return res.status(400).end();

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[lightify] DATABASE_URL lipseste - calculul nu se salveaza.");
    }
    return res.status(204).end();
  }

  // Campurile care nu tin de traseul ales raman NULL, ca sa nu para alese de client.
  const isText = input.kind === "text";

  try {
    const sql = neon(databaseUrl);
    await sql`
      insert into calculations (
        kind, text, size, stroke, graphic, logo_width_cm, logo_complexity,
        category, rgb, delivery,
        letters, width_cm, price_low, price_high, price_mid, floored, needs_consult,
        model_version
      ) values (
        ${input.kind},
        ${isText ? input.text.trim() : null},
        ${isText ? input.size : null},
        ${isText ? input.stroke : null},
        ${isText ? input.graphic : null},
        ${isText ? null : est.widthCm},
        ${isText ? null : input.logoComplexity},
        ${input.category}, ${input.rgb}, ${input.delivery},
        ${isText ? est.letters : null}, ${est.widthCm},
        ${est.low}, ${est.high}, ${Math.round(est.mid)}, ${est.floored}, ${est.needsConsult},
        ${process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local"}
      )
    `;
  } catch (err) {
    console.error("[lightify] salvarea calculului a esuat", err);
    return res.status(500).end();
  }

  return res.status(204).end();
}
