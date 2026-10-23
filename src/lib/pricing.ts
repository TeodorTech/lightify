/**
 * Lightify price model.
 *
 * Width, not letter count, drives the price. Recent projects range from 62 to
 * 187 RON/letter but sit on one line when plotted against width: more letters
 * in the same width just means smaller letters, not more tube.
 * Form: (fixedFee + ratePerCm x width x stroke) x graphic x category x rgb (+ delivery)
 *
 * Fitted on the 4 most recent projects (Oct 2026, all single-stroke text;
 * names and prices in pricing-calibration.json, which is gitignored):
 *   text  70 x 20 cm, firma     1350 -> 1463   +8.4%
 *   text  80 x 15 cm, personal  1500 -> 1420   -5.3%
 *   text 150 x 35 cm, personal  2000 -> 2050   +2.5%
 *   text  55 x 50 cm, firma     1300 -> 1315   +1.2%
 *   mean abs error 4.4%
 *
 * Older portfolio projects (CALIBRATION_SET) are kept for reference, not fitted.
 * Scandal (1000) and On Air (600) predate the current price level; the model
 * now quotes them at 1364 and 1166. The two logos at 100 cm land on the "mediu" tier:
 *   Manele Mentolate 2000 -> 2024 / Pizza Al Taglio 2000 -> 2024.
 *
 * To retune: change PRICING only. Nothing else in the app hardcodes a price.
 */

export type SignKind = "text" | "logo";
/** single = o banda de neon pe traseul literei. double = neonul urmeaza conturul literei. */
export type StrokeStyle = "single" | "double";
export type Category = "afacere" | "personal" | "eveniment";
export type SizeKey = "mic" | "standard" | "mare" | "xl";
export type LogoComplexity = "simplu" | "mediu" | "detaliat";
export type Delivery = "bucuresti" | "tara";

/* ---------------------------------------------------------------------------
 * CALIBRARE - singurul loc unde se schimba preturile.
 * ------------------------------------------------------------------------- */
export const PRICING = {
  /** Costul fix al oricarui semn: transformator, suport acril, ambalaj, pornirea lucrului. */
  fixedFee: 700,
  /** RON per cm de latime, banda simpla, categorie non-business. */
  ratePerCm: 9,

  /** Sub aceasta suma nu se ia comanda. Texte scurte se ridica automat aici. */
  minOrder: 650,

  /** Latimea intervalului afisat clientului (+/-). */
  displayMargin: 0.12,
  /** Logo-urile au mai multa incertitudine -> interval mai larg. */
  displayMarginLogo: 0.2,

  /**
   * Marimi. cmPerUnit = cati cm de latime ocupa o litera (spatiile = 0.5).
   * Proiectele reale merg de la 6.4 la 16.7 cm/litera. Marimea intra in pret
   * doar prin latimea rezultata -- nu are multiplicator propriu.
   */
  sizes: {
    mic: { label: "Mic", cmPerUnit: 6 },
    standard: { label: "Standard", cmPerUnit: 8 },
    mare: { label: "Mare", cmPerUnit: 11 },
    xl: { label: "Foarte mare", cmPerUnit: 15 },
  } as Record<SizeKey, { label: string; cmPerUnit: number }>,

  /**
   * Conturul dublu urmeaza ambele margini ale literei, deci aproximativ dubleaza
   * tubul folosit. Se aplica doar pe partea per cm: costul fix (transformator,
   * acril, montaj) ramane acelasi. <-- numarul de confirmat de Teodor.
   */
  strokes: { single: 1.0, double: 1.8 } as Record<StrokeStyle, number>,

  /** Element grafic langa text (logo, emoji, simbol): ex. o banana langa "BANANAS". */
  graphicMultiplier: 1.25,

  /** Regula ta: business +10%. */
  categories: {
    afacere: 1.1,
    personal: 1.0,
    eveniment: 1.0,
  } as Record<Category, number>,

  /** Controler RGB cu telecomanda: +10%. */
  rgbMultiplier: 1.1,

  /** Limitele sliderului de latime pentru logo/desen. Peste 120cm nu se poate produce. */
  logoWidthRange: { min: 40, max: 120, step: 10 },

  /**
   * Multiplicator peste formula de text, pentru logo/desen la aceeasi latime.
   * "mediu" aduce Pizza / Manele (100 cm) la 2000; Garden Of Teilor ar cere ~1.7.
   */
  logoComplexity: {
    simplu: 1.0,
    mediu: 1.15,
    detaliat: 1.5,
  } as Record<LogoComplexity, number>,

  delivery: { bucuresti: 0, tara: 200 } as Record<Delivery, number>,

  /** Peste aceste praguri estimarea se marcheaza ca "necesita confirmare". */
  consultThresholds: { widthCm: 250, letters: 40 },
} as const;

/** Proiecte vechi din portofoliu, pastrate ca referinta (nu intra in fit). Sursa: pricing-calibration.json */
export const CALIBRATION_SET = [
  { name: "Scandal", price: 1000, widthCm: 60, text: "Scandal", category: "afacere" },
  { name: "On Air", price: 600, widthCm: 40, text: "On Air", category: "afacere" },
  { name: "Pizza Al Taglio", price: 2000, widthCm: 100, text: "Pizza Al Taglio", category: "afacere" },
  { name: "Manele Mentolate", price: 2000, widthCm: 100, text: "Manele Mentolate", category: "afacere" },
  { name: "Love People", price: 1600, widthCm: 80, text: "Love People", category: "personal" },
] as const;

export interface EstimateInput {
  kind: SignKind;
  text: string;
  size: SizeKey;
  stroke: StrokeStyle;
  /** Element grafic langa text. Se aplica doar pe traseul "text". */
  graphic: boolean;
  category: Category;
  rgb: boolean;
  delivery: Delivery;
  /** Doar pentru kind === "logo". */
  logoWidthCm: number;
  logoComplexity: LogoComplexity;
}

export interface Estimate {
  /** Capetele intervalului afisat, rotunjite la 50 RON. */
  low: number;
  high: number;
  /** Numarul central, nerotunjit, pentru calcule interne. */
  mid: number;
  delivery: number;
  letters: number;
  /** Latimea estimata a semnului, in cm. */
  widthCm: number;
  /** true daca pretul a fost ridicat la comanda minima. */
  floored: boolean;
  /** true daca proiectul e prea mare ca sa fie cotat automat. */
  needsConsult: boolean;
  /** Sugereaza impartirea pe 2 randuri daca iese foarte lat. */
  suggestTwoLines: boolean;
  breakdown: { label: string; value: string }[];
}

/** Litere care consuma tub. Spatiile si punctuatia nu se pun la socoteala. */
export function countLetters(text: string): number {
  if (!text) return 0;
  return (text.match(/[\p{L}\p{N}]/gu) || []).length;
}

/** Unitati de latime: o litera = 1, un spatiu = 0.5. */
function countWidthUnits(text: string): number {
  const letters = countLetters(text);
  const spaces = text ? (text.match(/\s/g) || []).length : 0;
  return letters + spaces * 0.5;
}

const roundTo50 = (n: number) => Math.round(n / 50) * 50;

const CATEGORY_LABEL: Record<Category, string> = {
  afacere: "Afacere",
  personal: "Personal",
  eveniment: "Eveniment",
};

const COMPLEXITY_LABEL: Record<LogoComplexity, string> = {
  simplu: "Simplu",
  mediu: "Mediu",
  detaliat: "Detaliat",
};

export function estimate(input: EstimateInput): Estimate | null {
  const {
    kind, text, size, stroke, graphic, category, rgb, delivery,
    logoWidthCm, logoComplexity,
  } = input;

  const sizeDef = PRICING.sizes[size];
  const deliveryCost = PRICING.delivery[delivery];
  const letters = countLetters(text);

  let base: number;
  let widthCm: number;
  const breakdown: { label: string; value: string }[] = [];

  if (kind === "logo") {
    // A logo's tube density is already carried by the complexity tier, so the
    // stroke and graphic options do not apply here -- they would double-count.
    // estimate() is public, so clamp rather than trusting the caller's slider.
    widthCm = Math.min(
      Math.max(logoWidthCm, PRICING.logoWidthRange.min),
      PRICING.logoWidthRange.max
    );
    base =
      (PRICING.fixedFee + widthCm * PRICING.ratePerCm) *
      PRICING.logoComplexity[logoComplexity];
    breakdown.push(
      { label: "Lățime", value: `${widthCm} cm` },
      { label: "Design", value: COMPLEXITY_LABEL[logoComplexity] },
    );
  } else {
    if (letters === 0) return null;
    widthCm = Math.round(countWidthUnits(text) * sizeDef.cmPerUnit);
    // Double stroke doubles the tube, not the transformer or the acrylic.
    base = PRICING.fixedFee + widthCm * PRICING.ratePerCm * PRICING.strokes[stroke];
    breakdown.push(
      { label: "Litere", value: `${letters}` },
      { label: "Mărime", value: `${sizeDef.label} (~${widthCm} cm lățime)` },
    );

    breakdown.push({
      label: "Neon",
      value: stroke === "double" ? "Contur dublu" : "Bandă simplă",
    });

    if (graphic) {
      base *= PRICING.graphicMultiplier;
      breakdown.push({ label: "Element grafic", value: "Inclus" });
    }
  }

  const catMult = PRICING.categories[category];
  base *= catMult;
  breakdown.push({ label: "Pentru", value: CATEGORY_LABEL[category] });

  if (rgb) {
    base *= PRICING.rgbMultiplier;
    breakdown.push({ label: "Controler RGB", value: "Inclus" });
  }

  const floored = base < PRICING.minOrder;
  if (floored) base = PRICING.minOrder;

  breakdown.push({
    label: "Livrare",
    value: deliveryCost > 0 ? `${deliveryCost} RON` : "Inclusă (București)",
  });

  const margin = kind === "logo" ? PRICING.displayMarginLogo : PRICING.displayMargin;
  const mid = base + deliveryCost;

  // The displayed band must never dip under the minimum order -- neither when
  // the floor applied (the minimum IS the price, rendered as "de la X"), nor
  // when the lower edge of an unfloored band would slip beneath it.
  const absoluteFloor = PRICING.minOrder + deliveryCost;
  const low = floored ? roundTo50(mid) : Math.max(roundTo50(mid * (1 - margin)), absoluteFloor);

  return {
    low,
    high: floored ? roundTo50(mid) : roundTo50(mid * (1 + margin)),
    mid,
    delivery: deliveryCost,
    letters,
    widthCm,
    floored,
    needsConsult:
      widthCm > PRICING.consultThresholds.widthCm ||
      letters > PRICING.consultThresholds.letters,
    suggestTwoLines: kind === "text" && widthCm > 150,
    breakdown,
  };
}

/**
 * Rezumat al configuratiei, prefilat in formularul de contact.
 * Clientul il vede in textarea inainte sa trimita, deci textul e cu diacritice.
 */
export function describeConfig(input: EstimateInput, est: Estimate): string {
  const parts: string[] = [];

  if (input.kind === "logo") {
    parts.push(
      `Logo sau desen, lățime aproximativ ${input.logoWidthCm} cm, design ${COMPLEXITY_LABEL[input.logoComplexity].toLowerCase()}`
    );
  } else {
    parts.push(`Text: "${input.text}" (${est.letters} litere)`);
    parts.push(
      `Mărime: ${PRICING.sizes[input.size].label} (aproximativ ${est.widthCm} cm lățime)`
    );
    parts.push(
      input.stroke === "double"
        ? "Neon cu contur dublu (urmează conturul literelor)"
        : "Neon bandă simplă"
    );
    if (input.graphic) {
      parts.push("Cu element grafic lângă text (logo, emoji sau simbol)");
    }
  }

  parts.push(`Pentru: ${CATEGORY_LABEL[input.category]}`);
  if (input.rgb) parts.push("Cu controler RGB și telecomandă");
  parts.push(`Livrare: ${input.delivery === "bucuresti" ? "București" : "restul țării"}`);

  const price = est.floored ? `de la ${est.low} RON` : `${est.low} – ${est.high} RON`;

  return (
    "Configurație din calculatorul de preț:\n" +
    parts.map((line) => `• ${line}`).join("\n") +
    `\n\nEstimare afișată: ${price}` +
    "\n\nAș vrea mockup-ul gratuit pentru acest design."
  );
}
