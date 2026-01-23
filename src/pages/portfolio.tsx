import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const CATEGORIES = [
  { id: "toate", name: "Toate" },
  { id: "afaceri", name: "Afaceri" },
  { id: "casă", name: "Casă" },
  { id: "eveniment", name: "Evenimente" },
];

const portfolioItems = [
  {
    id: 1,
    title: "Neon Brand Jidvei",
    description: "Întărește identitatea vizuală a brandului tău cu un logo neon premium, realizat manual pentru un impact vizual maxim.",
    category: "afaceri",
    imageUrl: "/images/jidvei.webp",
  },
  {
    id: 2,
    title: "Neon Balcan HR",
    description: "Transformă imaginea afacerii tale cu un semn neon vibrant care atrage privirile și creează o identitate memorabilă.",
    category: "afaceri",
    imageUrl: "/images/balcan.webp",
  },
  {
    id: 3,
    title: "Neon Maria 18 Birthday Party",
    description: "Adaugă un strop de magie petrecerii de zi de naștere cu un design neon festiv și plin de culoare.",
    category: "eveniment",
    imageUrl: "/images/maria18.jpeg",
  },
  {
    id: 4,
    title: "Neon Manele Mentolate",
    description: "Logo-uri neon realizate la comandă pentru branduri care vor să iasă în evidență într-un mod spectaculos.",
    category: "afaceri",
    imageUrl: "/images/maneleMentolate.jpg",
  },
  {
    id: 5,
    title: "Neon Plush Birthday Party",
    description: "Un element central perfect pentru orice aniversare, aducând lumină și bucurie momentelor speciale.",
    category: "eveniment",
    imageUrl: "/images/plushBday.webp",
  },
  {
    id: 6,
    title: "Neon Decorative Angels & Demons",
    description: "Îmbunătățește atmosfera de lucru cu elemente decorative din neon care inspiră creativitate și profesionalism.",
    category: "casă",
    imageUrl: "/images/hearts.jpeg",
  },
  {
    id: 7,
    title: "Neon Toate Diamantele",
    description: "Personalizează-ți spațiul personal cu un accent luminos care reflectă stilul și personalitatea ta.",
    category: "casă",
    imageUrl: "/images/diamente.webp",
  },
  {
    id: 8,
    title: "Neon Thunder Strike",
    description: "O explozie de energie capturată în neon, perfectă pentru a adăuga un look electrizant oricărui interior modern.",
    category: "casă",
    imageUrl: "/images/thunder copy.webp",
  },
  {
    id: 9,
    title: "Neon Scandal",
    description: "Îndrăzneț și provocator, acest semn neon este creat special pentru spații care vor să iasă în evidență prin atitudine.",
    category: "afaceri",
    imageUrl: "/images/scandal.webp",
  },
  {
    id: 10,
    title: "Neon Cloudy Sky",
    description: "Adu liniștea și magia unui cer înnoptat direct în camera ta cu un design diafan și relaxant.",
    category: "casă",
    imageUrl: "/images/cloud.webp",
  },
  {
    id: 11,
    title: "Neon Buna Dimineața",
    description: "Adu un zâmbet pe buzele oricui cu un salut luminos și primitor, perfect pentru cafenele sau bucătării moderne.",
    category: "afaceri",
    imageUrl: "/images/buna.webp",
  },
  {
    id: 12,
    title: "Neon On Air",
    description: "Ideal pentru studiouri, vloggeri sau pasionați de broadcasting, acest semn adaugă un aer profesional oricărui setup de streaming.",
    category: "afaceri",
    imageUrl: "/images/on-air.webp",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("toate");

  const filteredItems =
    filter === "toate"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <Layout
      title="Portofoliu | Semne Neon Personalizate"
      description="Explorează colecția noastră de semne neon personalizate pentru afaceri, case și evenimente."
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
              <article
                key={item.id}
                className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
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
