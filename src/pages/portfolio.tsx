import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

// Mock portfolio data - in a real app, this would come from a CMS or API
const portfolioItems = [
  {
    id: 1,
    title: "Logo Restaurant",
    description:
      "Semn neon personalizat pentru restaurantul 'The Bright Kitchen' cu logo-ul și culorile lor distinctive.",
    category: "afaceri",
    imageUrl:
      "https://images.unsplash.com/photo-1563656157432-67560b52174b?w=800&q=80",
  },
  {
    id: 2,
    title: "Panou cu Nume pentru Nuntă",
    description:
      "Semn neon personalizat cu numele cuplului pentru fundalul recepției de nuntă.",
    category: "eveniment",
    imageUrl:
      "https://images.unsplash.com/photo-1594642445349-8422940b5481?w=800&q=80",
  },
  {
    id: 3,
    title: "Semn 'Visează Mare' pentru Casă",
    description:
      "Semn neon inspirațional pentru decor de casă cu un aspect modern.",
    category: "casă",
    imageUrl:
      "https://images.unsplash.com/photo-1557673834-5d48aff258eb?w=800&q=80",
  },
  {
    id: 4,
    title: "Semn pentru Cafenea",
    description:
      "Logo vibrant de ceașcă de cafea neon pentru cafeneaua 'Brew & Glow'.",
    category: "afaceri",
    imageUrl:
      "https://images.unsplash.com/photo-1590412638036-45207574f52a?w=800&q=80",
  },
  {
    id: 5,
    title: "Decorațiune pentru Ziua de Naștere",
    description:
      "Semn neon personalizat 'La Mulți Ani' cu culori festive pentru decorarea evenimentelor.",
    category: "eveniment",
    imageUrl:
      "https://images.unsplash.com/photo-1608438304997-d4e54ffce405?w=800&q=80",
  },
  {
    id: 6,
    title: "Semn Motivațional pentru Birou",
    description:
      "Semn neon corporativ cu sloganul companiei pentru zona de recepție a biroului.",
    category: "afaceri",
    imageUrl:
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&q=80",
  },
  {
    id: 7,
    title: "Semn pentru Barul de Acasă",
    description:
      "Semn neon personalizat 'Cocktails & Dreams' pentru amenajarea unui bar acasă.",
    category: "casă",
    imageUrl:
      "https://images.unsplash.com/photo-1514362829160-63cd9a53aad5?w=800&q=80",
  },
  {
    id: 8,
    title: "Afișaj pentru Magazin",
    description: "Vitrina unui butic de modă cu semnalizare neon sezonieră.",
    category: "afaceri",
    imageUrl:
      "https://images.unsplash.com/photo-1582220874760-48d31c8b631a?w=800&q=80",
  },
  {
    id: 9,
    title: "Decorațiune pentru Camera Copiilor",
    description: "Design jucăuș de curcubeu neon pentru un dormitor de copii.",
    category: "casă",
    imageUrl:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&q=80",
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
      description="Explorează colecția noastră de semne neon personalizate pentru afaceri, case și evenimente. Găsește inspirație pentru propriul tău proiect."
    >
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Portofoliul Nostru
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explorează colecția noastră diversă de creații neon personalizate.
              Fiecare proiect este unic și realizat la comandă pentru clienții
              noștri.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mt-10 flex justify-center px-2 sm:px-0">
            <div
              className="inline-flex rounded-md shadow-sm overflow-x-auto max-w-full"
              role="group"
            >
              <button
                type="button"
                onClick={() => setFilter("toate")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === "toate"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Toate
              </button>
              <button
                type="button"
                onClick={() => setFilter("afaceri")}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "afaceri"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Afaceri
              </button>
              <button
                type="button"
                onClick={() => setFilter("casă")}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "casă"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Casă
              </button>
              <button
                type="button"
                onClick={() => setFilter("eveniment")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === "eveniment"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Evenimente
              </button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-16 px-2 sm:px-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20 lg:px-0">
            {filteredItems.map((item) => (
              <article key={item.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-8 text-lg font-semibold leading-6 text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ai o idee pentru un proiect personalizat?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contactează-ne astăzi pentru a discuta despre viziunea ta.
              Transformăm ideile în realitate luminoasă.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                Solicită o Ofertă
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
