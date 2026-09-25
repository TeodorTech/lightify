/**
 * Trimite catre Formspree configuratia calculata, ca notificare interna.
 *
 * Nu colecteaza nimic despre persoana -- doar ce a configurat. Merge intr-un
 * formular Formspree SEPARAT de cel de contact, ca sa nu amestece semnalele de
 * interes cu cererile reale (si ca skill-ul de raspuns automat sa nu le confunde).
 */
import type { Estimate, EstimateInput } from "./pricing";
import { PRICING } from "./pricing";

/** Peste atatea trimiteri intr-o sesiune ne oprim: protejeaza inbox-ul si cota Formspree. */
const MAX_PER_SESSION = 3;
const STORAGE_KEY = "lightify_calc_reported";

const CATEGORY_LABEL: Record<EstimateInput["category"], string> = {
  afacere: "Afacere",
  personal: "Personal",
  eveniment: "Eveniment",
};

const yesNo = (v: boolean) => (v ? "Da" : "Nu");

/** Campuri plate -- Formspree le afiseaza ca tabel in email. */
export function buildReport(input: EstimateInput, est: Estimate): Record<string, string> {
  const pret = est.floored ? `de la ${est.low} RON` : `${est.low} - ${est.high} RON`;

  const common = {
    _subject: `Calculator: ${pret}`,
    estimare: pret,
    pentru: CATEGORY_LABEL[input.category],
    controler_rgb: yesNo(input.rgb),
    livrare: input.delivery === "bucuresti" ? "Bucuresti" : "Restul tarii",
    moment: new Date().toLocaleString("ro-RO"),
  };

  if (input.kind === "logo") {
    return {
      ...common,
      tip: "Logo sau desen",
      latime: `${est.widthCm} cm`,
      design: input.logoComplexity,
    };
  }

  return {
    ...common,
    tip: "Text",
    text: input.text,
    litere: String(est.letters),
    marime: `${PRICING.sizes[input.size].label} (~${est.widthCm} cm)`,
    neon: input.stroke === "double" ? "Contur dublu" : "Banda simpla",
    element_grafic: yesNo(input.graphic),
  };
}

/** Amprenta configuratiei, ca sa nu trimitem acelasi lucru de doua ori. */
function fingerprint(input: EstimateInput): string {
  return input.kind === "logo"
    ? ["logo", input.logoWidthCm, input.logoComplexity, input.category, input.rgb, input.delivery].join("|")
    : ["text", input.text.trim().toLowerCase(), input.size, input.stroke, input.graphic, input.category, input.rgb, input.delivery].join("|");
}

/** sessionStorage poate arunca (private mode, cookies blocate) -- niciodata fatal. */
function readSent(): string[] {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function rememberSent(sent: string[]): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sent));
  } catch {
    /* ignore */
  }
}

/**
 * Trimite raportul. Nu arunca niciodata si nu blocheaza UI-ul: daca esueaza,
 * clientul tot isi vede pretul.
 */
export async function reportCalculation(input: EstimateInput, est: Estimate): Promise<void> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CALC_ID;
  if (!formId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[lightify] NEXT_PUBLIC_FORMSPREE_CALC_ID lipseste - calculul nu se raporteaza."
      );
    }
    return;
  }

  const print = fingerprint(input);
  const sent = readSent();
  if (sent.includes(print) || sent.length >= MAX_PER_SESSION) return;

  // Marcam inainte de fetch: doua apasari rapide nu trebuie sa trimita de doua ori.
  rememberSent([...sent, print]);

  try {
    await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(buildReport(input, est)),
    });
  } catch {
    /* raportarea nu trebuie sa afecteze clientul */
  }
}
