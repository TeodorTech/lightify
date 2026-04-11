import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Întrebări frecvente", subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-bold tracking-widest text-pink-500 uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </p>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-400">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-pink-500/40" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold transition-colors duration-300 ${isOpen ? "text-pink-500" : "text-white"}`}>
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-pink-500 bg-pink-500/10 text-pink-500 rotate-45"
                        : "border-white/20 text-gray-400"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
