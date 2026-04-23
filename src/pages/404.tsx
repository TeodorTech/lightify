import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Custom404() {
  return (
    <Layout
      title="Pagină negăsită"
      description="Ne pare rău, pagina căutată nu există. Revino la portofoliul nostru de semne neon personalizate sau contactează-ne pentru o ofertă."
    >
      <div className="bg-black min-h-screen pt-32 pb-24 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="glass-card rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
            <p className="text-[120px] md:text-[180px] font-extrabold text-glow-pink text-white leading-none tracking-tighter">
              404
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-6">
              Pagina nu a fost găsită
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Link-ul pe care l-ai accesat nu mai există sau a fost mutat. Dar sigur găsim un neon pe placul tău.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition-all hover:shadow-neon-pink"
              >
                Înapoi la pagina principală
              </Link>
              <Link
                href="/portofoliu-semne-neon"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:border-pink-500/50 hover:bg-white/5 transition-all"
              >
                Vezi portofoliul
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
