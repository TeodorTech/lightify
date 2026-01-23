import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const VALUES = [
  {
    name: "Meșteșugărie de calitate",
    description: "Ne angajăm la cele mai înalte standarde în fiecare semn pe care îl creăm. Nu facem compromisuri privind calitatea materialelor.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    name: "Excelență creativă",
    description: "Îmbinăm meșteșugul tradițional cu designul modern pentru a crea opere de artă neon care sunt atât estetice, cât și funcționale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    name: "Satisfacția clienților",
    description: "Îți ascultăm viziunea și lucrăm îndeaproape cu tine pentru a ne asigura că fiecare semn neon depășește așteptările tale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Inovație sustenabilă",
    description: "Explorăm în mod constant metode și materiale noi pentru a face produsele noastre mai eficiente energetic și prietenoase cu mediul.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <Layout
      title="Despre Noi | Semne Neon Personalizate"
      description="Descoperă povestea LIGHTIFY, locul unde arta neonului întâlnește măiestria manuală pentru a crea decoruri spectaculoase și unice."
    >
      <div className="bg-black text-white selection:bg-pink-500/30">

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-transparent blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              Povestea noastră în <br />
              <span className="text-glow-pink text-pink-500">lumină vibrante</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Suntem o echipă de artiști și vizionari dedicați transformării spațiilor prin arta neonului modern.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative glass-card rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/lightify.webp"
                    alt="Workplace"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-500 text-sm font-bold tracking-widest uppercase">
                  Începuturile noastre
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  De la pasiune la <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">perfecțiune luminoasă</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    LIGHTIFY a luat naștere din dorința de a reinventa un simbol clasic al culturii urbane: neonul. Ceea ce a început ca un experiment creativ într-un mic atelier s-a transformat rapid într-un brand sinonim cu inovația și stilul.
                  </p>
                  <p>
                    Nu ne limităm doar la a îndoi tuburi de lumină. Noi construim identități vizuale. Fie că este vorba despre un logo pentru o afacere de succes sau o piesă centrală pentru o locuință modernă, abordăm fiecare proiect cu aceeași rigoare artistică.
                  </p>
                  <p>
                    Astăzi, suntem mândri să fim alegerea principală pentru cei care nu caută doar un produs, ci o experiență vizuală memorabilă.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-zinc-950/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Valori care ne definesc</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Succesul nostru se bazează pe patru piloni fundamentali care ghidează excelența în fiecare detaliu.
            </p>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((val, idx) => (
                <div
                  key={val.name}
                  className="glass-card p-8 rounded-3xl group hover:border-pink-500/40 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 group-hover:shadow-neon-pink">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{val.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-800/20 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center border-white/10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
                Vrei să fii parte din <br />
                <span className="text-glow-pink text-pink-500">povestea noastră?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Echipa noastră este pregătită să îți transforme viziunea în realitate luminoasă. Hai să discutăm.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition-all hover:shadow-neon-pink"
                >
                  Contactează-ne acum
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-black border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
                >
                  Vezi portofoliul
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
