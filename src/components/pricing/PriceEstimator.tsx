import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  estimate,
  describeConfig,
  countLetters,
  PRICING,
  type EstimateInput,
  type SizeKey,
} from "../../lib/pricing";
import { reportCalculation } from "../../lib/trackCalculation";

const SIZE_ORDER: SizeKey[] = ["mic", "standard", "mare", "xl"];

// Prefilled so the configurator is never empty on arrival. The price itself
// stays hidden until "Calculează" is pressed -- that press is the intent signal
// we report, and a live-updating number would give us nothing to capture.
const DEFAULTS: EstimateInput = {
  kind: "text",
  text: "Coffee Time",
  size: "standard",
  stroke: "single",
  graphic: false,
  category: "afacere",
  rgb: false,
  delivery: "bucuresti",
  logoWidthCm: 80,
  logoComplexity: "mediu",
};

const ron = (n: number) => n.toLocaleString("ro-RO");

/** Shared pill button used by every choice row in the configurator. */
function Choice({
  active,
  onClick,
  children,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-3 rounded-xl text-xs font-bold transition-all border text-center leading-tight ${
        active
          ? "bg-pink-500 border-pink-500 text-white shadow-neon-pink"
          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20"
      }`}
    >
      {children}
      {sub && (
        <span className={`block mt-1 font-medium ${active ? "text-white/70" : "text-gray-600"}`}>
          {sub}
        </span>
      )}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 block">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function PriceEstimator() {
  const [config, setConfig] = useState<EstimateInput>(DEFAULTS);
  const [calculated, setCalculated] = useState<EstimateInput | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const set = <K extends keyof EstimateInput>(key: K, value: EstimateInput[K]) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  const est = useMemo(() => (calculated ? estimate(calculated) : null), [calculated]);
  const letters = countLetters(config.text);

  /** The shown price belongs to an older config than what is on screen now. */
  const isStale =
    calculated !== null && JSON.stringify(calculated) !== JSON.stringify(config);

  const canCalculate = config.kind === "logo" || letters > 0;

  const handleCalculate = () => {
    const next = estimate(config);
    if (!next) return;
    setCalculated(config);
    // Fire and forget -- reporting must never delay or break the price reveal.
    void reportCalculation(config, next);
  };

  /** Live width per size option, so the labels describe THIS text. */
  const sizeWidths = useMemo(() => {
    const out: Partial<Record<SizeKey, number>> = {};
    if (config.kind !== "text" || letters === 0) return out;
    for (const s of SIZE_ORDER) {
      out[s] = estimate({ ...config, size: s })?.widthCm;
    }
    return out;
  }, [config, letters]);

  const contactHref =
    est && calculated
      ? `/contact?subject=${encodeURIComponent(describeConfig(calculated, est))}`
      : "/contact";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* ---------------- Configurator ---------------- */}
      <div className="lg:col-span-3 glass-card rounded-[2rem] p-6 md:p-10 space-y-7">
        <Field label="Ce vrei să realizăm?">
          <div className="grid grid-cols-2 gap-3">
            <Choice active={config.kind === "text"} onClick={() => set("kind", "text")}>
              Text / cuvinte
            </Choice>
            <Choice active={config.kind === "logo"} onClick={() => set("kind", "logo")}>
              Logo sau desen
            </Choice>
          </div>
        </Field>

        {config.kind === "text" ? (
          <>
            <Field label="Ce scrie pe neon?">
              <div className="relative">
                <input
                  type="text"
                  value={config.text}
                  onChange={(e) => set("text", e.target.value)}
                  maxLength={60}
                  placeholder="Coffee Time"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-24 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-700"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 tabular-nums">
                  {letters} {letters === 1 ? "literă" : "litere"}
                </span>
              </div>
            </Field>

            <Field label="Mărime">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SIZE_ORDER.map((s) => (
                  <Choice
                    key={s}
                    active={config.size === s}
                    onClick={() => set("size", s)}
                    sub={sizeWidths[s] ? `~${sizeWidths[s]} cm` : undefined}
                  >
                    {PRICING.sizes[s].label}
                  </Choice>
                ))}
              </div>
            </Field>

            <Field label="Tipul de neon">
              <div className="grid grid-cols-2 gap-3">
                <Choice
                  active={config.stroke === "single"}
                  onClick={() => set("stroke", "single")}
                  sub="un singur fir de neon"
                >
                  Bandă simplă
                </Choice>
                <Choice
                  active={config.stroke === "double"}
                  onClick={() => set("stroke", "double")}
                  sub="urmează conturul literei"
                >
                  Contur dublu
                </Choice>
              </div>
            </Field>

            <label className="flex items-start gap-4 p-4 rounded-2xl bg-pink-500/5 border border-pink-500/20 cursor-pointer hover:bg-pink-500/10 transition-all">
              <input
                type="checkbox"
                checked={config.graphic}
                onChange={(e) => set("graphic", e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-white/20 bg-black text-pink-500 focus:ring-pink-500 accent-pink-500"
              />
              <span className="text-sm">
                <span className="block text-white font-bold">
                  Vreau și un element grafic lângă text
                </span>
                <span className="block text-gray-500 text-xs">
                  Un logo, emoji sau simbol desenat lângă litere — de exemplu o banană lângă
                  textul BANANAS
                </span>
              </span>
            </label>
          </>
        ) : (
          <>
            <Field label={`Lățime aproximativă — ${config.logoWidthCm} cm`}>
              <input
                type="range"
                min={PRICING.logoWidthRange.min}
                max={PRICING.logoWidthRange.max}
                step={PRICING.logoWidthRange.step}
                value={config.logoWidthCm}
                onChange={(e) => set("logoWidthCm", Number(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-600 px-1">
                <span>{PRICING.logoWidthRange.min} cm</span>
                <span>{PRICING.logoWidthRange.max} cm</span>
              </div>
            </Field>

            <Field label="Cât de detaliat e designul?">
              <div className="grid grid-cols-3 gap-3">
                <Choice
                  active={config.logoComplexity === "simplu"}
                  onClick={() => set("logoComplexity", "simplu")}
                  sub="doar text stilizat"
                >
                  Simplu
                </Choice>
                <Choice
                  active={config.logoComplexity === "mediu"}
                  onClick={() => set("logoComplexity", "mediu")}
                  sub="text + element grafic"
                >
                  Mediu
                </Choice>
                <Choice
                  active={config.logoComplexity === "detaliat"}
                  onClick={() => set("logoComplexity", "detaliat")}
                  sub="multe detalii fine"
                >
                  Detaliat
                </Choice>
              </div>
            </Field>
          </>
        )}

        <Field label="Pentru ce este">
          <div className="grid grid-cols-3 gap-3">
            <Choice active={config.category === "afacere"} onClick={() => set("category", "afacere")}>
              Afacere
            </Choice>
            <Choice active={config.category === "personal"} onClick={() => set("category", "personal")}>
              Personal
            </Choice>
            <Choice active={config.category === "eveniment"} onClick={() => set("category", "eveniment")}>
              Eveniment
            </Choice>
          </div>
        </Field>

        <Field label="Livrare">
          <div className="grid grid-cols-2 gap-3">
            <Choice
              active={config.delivery === "bucuresti"}
              onClick={() => set("delivery", "bucuresti")}
              sub="inclusă"
            >
              București
            </Choice>
            <Choice
              active={config.delivery === "tara"}
              onClick={() => set("delivery", "tara")}
              sub={`+${PRICING.delivery.tara} RON`}
            >
              Restul țării
            </Choice>
          </div>
        </Field>

        <label className="flex items-start gap-4 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 cursor-pointer hover:bg-purple-500/10 transition-all">
          <input
            type="checkbox"
            checked={config.rgb}
            onChange={(e) => set("rgb", e.target.checked)}
            className="w-5 h-5 mt-0.5 rounded border-white/20 bg-black text-purple-500 focus:ring-purple-500 accent-purple-500"
          />
          <span className="text-sm">
            <span className="block text-white font-bold">Controler RGB cu telecomandă</span>
            <span className="block text-gray-500 text-xs">
              Schimbi culoarea oricând, din telecomandă
            </span>
          </span>
        </label>

        <button
          type="button"
          onClick={handleCalculate}
          disabled={!canCalculate || (calculated !== null && !isStale)}
          className="w-full py-5 bg-pink-600 text-white font-black rounded-2xl hover:bg-pink-500 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-pink-600 flex items-center justify-center gap-2"
        >
          {calculated === null
            ? "Calculează prețul"
            : isStale
            ? "Recalculează"
            : "Preț calculat"}
          {(calculated === null || isStale) && (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>

        {!canCalculate && (
          <p className="text-xs text-gray-500 text-center -mt-3">
            Scrie textul dorit ca să putem calcula prețul.
          </p>
        )}
      </div>

      {/* ---------------- Result ---------------- */}
      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-28 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card rounded-[2rem] p-8 md:p-10">
            {!est ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h2m-5 5h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Configurează semnul tău, apoi apasă{" "}
                  <span className="text-white font-bold">Calculează prețul</span>.
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Estimare preț
                </p>

                {isStale && (
                  <div className="mb-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                    <p className="text-xs text-amber-200/90 leading-relaxed">
                      Ai modificat configurația. Prețul de mai jos este cel calculat anterior —
                      apasă <strong>Recalculează</strong> pentru valoarea actualizată.
                    </p>
                  </div>
                )}

                <div className={`mb-2 transition-opacity ${isStale ? "opacity-40" : ""}`}>
                  {est.floored ? (
                    <span className="text-4xl md:text-5xl font-black text-pink-500 text-glow-pink">
                      de la {ron(est.low)}
                    </span>
                  ) : (
                    <span className="text-4xl md:text-5xl font-black text-pink-500 text-glow-pink leading-none">
                      {ron(est.low)}
                      <span className="text-gray-600 mx-2 font-bold">–</span>
                      {ron(est.high)}
                    </span>
                  )}
                  <span className="block mt-2 text-sm font-bold text-gray-400">RON, TVA inclus</span>
                </div>

                {est.floored && (
                  <p className="text-xs text-gray-500 leading-relaxed mt-4">
                    Comanda minimă este {ron(PRICING.minOrder)} RON. Sub această dimensiune costurile
                    fixe — transformator, suport, ambalaj — rămân aceleași.
                  </p>
                )}

                {est.needsConsult && (
                  <div className="mt-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-200 leading-relaxed">
                      <strong className="block mb-1">Proiect de mari dimensiuni</strong>
                      La această scară prețul se stabilește individual. Estimarea de mai sus e doar
                      un punct de plecare — hai să discutăm proiectul.
                    </p>
                  </div>
                )}

                {est.suggestTwoLines && !est.needsConsult && (
                  <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                    La această mărime semnul iese ~{est.widthCm} cm lățime. Textul se poate împărți pe
                    două rânduri pentru o formă mai compactă, la același preț.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setShowBreakdown((v) => !v)}
                  className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  {showBreakdown ? "Ascunde" : "Ce include estimarea"}
                  <svg
                    className={`w-3 h-3 transition-transform ${showBreakdown ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showBreakdown && (
                  <dl className="mt-4 space-y-2 animate-in fade-in">
                    {est.breakdown.map((row) => (
                      <div
                        key={row.label}
                        className="flex justify-between gap-4 text-xs border-b border-white/5 pb-2"
                      >
                        <dt className="text-gray-500">{row.label}</dt>
                        <dd className="text-gray-300 font-medium text-right">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <Link
                  href={contactHref}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black rounded-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
                >
                  Vreau mockup gratuit
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <p className="mt-4 text-[11px] text-gray-600 leading-relaxed text-center">
                  Configurația ta se trimite automat odată cu cererea. Primești simularea vizuală și
                  prețul final în maximum 24 de ore.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
