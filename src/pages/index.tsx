import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const FEATURED_ITEMS = [
  {
    id: 1,
    title: "Neon Birthday Party",
    desc: "Creează o atmosferă festivă de neuitat pentru petrecerea ta cu un semn neon personalizat care va străluci în toate fotografiile.",
    img: "/images/plushBday.jpg",
    color: "pink"
  },
  {
    id: 2,
    title: "Neon Personalizat Brand",
    desc: "Întărește identitatea vizuală a brandului tău cu un logo neon premium, realizat manual pentru un impact vizual maxim.",
    img: "/images/jidvei.jpeg",
    color: "purple"
  },
  {
    id: 3,
    title: "Neon Afacerea Ta",
    desc: "Transformă-ți spațiul comercial într-o destinație modernă și primitoare cu un design neon unic, adaptat perfect afacerii tale.",
    img: "/images/balcan.jpg",
    color: "pink"
  }
];

export default function Home() {
  return (
    <Layout
      title="Semne Neon Personalizate"
      description="LIGHTIFY creează semne neon premium personalizate pentru case, afaceri și evenimente. Transformă-ți spațiul cu arta noastră din neon."
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          {/* Primary Glows - Increased Visibility */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/30 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-500" />

          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Radial Gradient for Focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-500/5 rounded-full blur-[120px] -z-10" />

          <h1 className="text-6xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-9xl animate-in fade-in slide-in-from-top-4 duration-1000">
            Lumina care{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-glow-pink pb-2">
              Te Definește
            </span>
          </h1>
          <p className="mt-8 max-w-lg mx-auto text-lg sm:text-2xl text-gray-300 sm:max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Arta neon realizată manual care dă viață spațiului tău. Calitate premium, design exclusiv și strălucire care durează.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in zoom-in duration-1000 delay-500">
            <Link
              href="/portfolio"
              className="group relative px-10 py-5 bg-pink-600 text-white font-black rounded-full transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">EXPLOREAZĂ PORTOFOLIUL</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-transparent border-2 border-purple-500 text-purple-400 font-black rounded-full transition-all duration-300 hover:bg-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transform hover:-translate-y-1 active:scale-95"
            >
              PROIECTUL TĂU
            </Link>
          </div>
        </div>

        {/* Simplified Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-px h-12 bg-gradient-to-b from-pink-500 to-transparent relative animate-pulse">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
          </div>
        </div>
      </section>

      <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold tracking-widest text-pink-500 uppercase">
                Exclusivități
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Creații Reprezentative
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-pink-500 font-bold hover:text-pink-400 transition-colors flex items-center gap-2 group"
            >
              Vezi Toată Galeria
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {FEATURED_ITEMS.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Link
                      href="/portfolio"
                      className={`text-xs font-bold uppercase tracking-widest ${item.color === 'pink' ? 'text-pink-500' : 'text-purple-500'}`}
                    >
                      Vezi Detalii
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black py-24 sm:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-bold tracking-widest text-pink-500 uppercase">
              Excelență
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              De la Concept la Creație
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Procesul nostru artizanal asigură că fiecare semn neon este o capodoperă unică.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "1. Consultare Design",
                  description:
                    "Echipa noastră de artiști te ajută să-ți rafinezi viziunea, oferind consultanță gratuită pentru culori, fonturi și dimensiuni.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>
                  ),
                },
                {
                  title: "2. Producție Manuală",
                  description:
                    "Fiecare tub este modelat manual folosind tehnologia LED neon flex de ultimă generație pentru o durabilitate maximă.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.055 2.264-.22 2.814Z" /></svg>
                  ),
                },
                {
                  title: "3. Livrare Rapidă",
                  description:
                    "Expediem în siguranță prin curierat rapid, cu toate accesoriile necesare pentru instalare incluse în pachet.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center group">
                  <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-gray-900 border border-white/5 text-pink-500 mb-8 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-neon-pink transition-all duration-300">
                    {feature.icon}
                  </div>
                  <dt className="text-xl font-bold leading-7 text-white mb-4">
                    {feature.title}
                  </dt>
                  <dd className="text-base leading-7 text-gray-400">
                    <p>{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-800" />
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Gata să-ți luminezi spațiul?
          </h2>
          <p className="mt-6 text-xl text-pink-100 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o ofertă personalizată și transformă-ți viziunea în realitate.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicită o Ofertă
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-purple-900/40 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-purple-900/60 transition-all transform hover:-translate-y-1"
            >
              Vezi Portofoliul
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
