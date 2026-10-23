/**
 * Salveaza configuratia calculata (prin /api/track-calculation, in Neon), ca sa
 * putem verifica lunar daca estimarile live sunt corecte.
 *
 * Nu colecteaza nimic despre persoana -- doar ce a configurat. Pretul nu se
 * trimite: serverul il recalculeaza singur.
 */
import type { EstimateInput } from "./pricing";

/** Peste atatea salvari intr-o sesiune ne oprim: cine se joaca cu sliderul nu umple tabelul. */
const MAX_PER_SESSION = 3;
const STORAGE_KEY = "lightify_calc_reported";

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
 * Salveaza calculul. Nu arunca niciodata si nu blocheaza UI-ul: daca esueaza,
 * clientul tot isi vede pretul.
 */
export async function reportCalculation(input: EstimateInput): Promise<void> {
  const print = fingerprint(input);
  const sent = readSent();
  if (sent.includes(print) || sent.length >= MAX_PER_SESSION) return;

  // Marcam inainte de fetch: doua apasari rapide nu trebuie sa trimita de doua ori.
  rememberSent([...sent, print]);

  try {
    await fetch("/api/track-calculation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
      keepalive: true,
    });
  } catch {
    /* salvarea nu trebuie sa afecteze clientul */
  }
}
