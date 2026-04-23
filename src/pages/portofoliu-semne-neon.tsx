import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { portfolioItems } from "../constants/portfolio";

const CATEGORIES = [
  { id: "toate", name: "Toate" },
  { id: "afaceri", name: "Afaceri" },
  { id: "eveniment", name: "Evenimente" },
  { id: "casă", name: "Casă" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("toate");

  const filteredItems =
    filter === "toate"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <Layout
      title="Portofoliu Semne Neon & Afișe Luminoase | Lightify București"
      description="Descoperă galeria noastră de semne neon personalizate, sigle luminoase și proiecte LED realizate de Lightify în București. Vezi cum am transformat branduri și evenimente."
      keywords="portofoliu neon, galerie semne neon, modele firme luminoase, exemple neon personalizat, poze afise led, proiecte lightify"
      extraSchemas={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://lightify.ro/" },
            { "@type": "ListItem", "position": 2, "name": "Portofoliu", "item": "https://lightify.ro/portofoliu-semne-neon" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Portofoliu Semne Neon Lightify",
          "description": "Galerie de semne neon personalizate realizate de Lightify pentru afaceri, evenimente și decor interior în România.",
          "url": "https://lightify.ro/portofoliu-semne-neon",
          "provider": { "@type": "Organization", "name": "Lightify", "url": "https://lightify.ro" }
        }
      ]}
    >
      <div className="bg-black min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl text-glow-pink">
              Portofoliul Nostru
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Fiecare proiect este o poveste de lumină unică, realizată cu precizie și pasiune pentru clienții noștri.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-white/5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${filter === cat.id
                    ? "bg-pink-500 text-white shadow-neon-pink"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <Link
                key={item.id}
                href={`/neon-personalizat/${item.slug}`}
                className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
                aria-label={`Vezi detalii despre ${item.title}`}
              >
                <article className="flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className={`${item.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-pink-500 font-bold">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-pink-500/70 group-hover:text-pink-500 font-bold transition-all">
                      Vezi detalii
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-32 glass-card rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Inspirat de lucrările noastre?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                Hai să creăm împreună ceva spectaculos. Transformăm orice idee în neon.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition-all hover:shadow-neon-pink"
                >
                  Solicită Ofertă
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
