import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const FEATURES = [
  {
    title: "Calitate meșteșugărească",
    description: "Fiecare semn este creat manual cu meticulozitate de echipa noastră de artizani calificați.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.055 2.264-.22 2.814Z" />
      </svg>
    )
  },
  {
    title: "Materiale premium",
    description: "Folosim doar LED neon flex și componente de cea mai înaltă calitate, asigurând durabilitatea.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    )
  },
  {
    title: "Servicii personalizate",
    description: "De la concept la instalare, lucrăm îndeaproape cu tine pentru a realiza viziunea ta.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
];

const STEPS = [
  {
    title: "Consultare & design",
    desc: "Împărtășește viziunea ta și noi transformăm ideile în concepte vizuale spectaculoase.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    )
  },
  {
    title: "Producție manuală",
    desc: "Meșterii noștri creează manual fiecare detaliu folosind materiale de cea mai înaltă calitate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.055 2.264-.22 2.814Z" />
      </svg>
    )
  },
  {
    title: "Livrare rapidă",
    desc: "Semnul tău este ambalat cu grijă și livrat rapid, gata să îți lumineze spațiul.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  },
];

export default function WhyChooseUs() {
  return (
    <Layout
      title="De ce Lightify | Semne Neon Personalizate"
      description="Află de ce LIGHTIFY este alegerea preferată pentru semne neon personalizate: calitate artizanală, LED-uri premium și proces de design colaborativ."
    >
      <div className="bg-black text-white selection:bg-pink-500/30 overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              Excelența în <br />
              <span className="text-glow-pink text-pink-500">fiecare detaliu</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Nu facem doar semne. Facem artă luminoasă care redefinește spațiile. Descoperă ce ne face lideri în neon modern.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="glass-card p-10 rounded-[2.5rem] group hover:border-pink-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 mb-8 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 group-hover:shadow-neon-pink">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-zinc-950/50 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6">Procesul nostru</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                De la viziune la instalare, procesul nostru este gândit pentru a fi simplu și revoluționar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[10%] w-[80%] h-px bg-white/5 -z-10" />

              {STEPS.map((step) => (
                <div key={step.title} className="relative group text-center lg:text-left">
                  <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-pink-500 mb-8 mx-auto lg:mx-0 group-hover:border-pink-500/50 transition-all duration-500 shadow-xl group-hover:bg-pink-500/5 group-hover:shadow-neon-pink/20">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-500 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Showcase */}
        <section className="py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="glass-card rounded-[3rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-pink-500">
                  Calitate fără compromis
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Creat să <span className="text-glow-pink">impresioneze</span>. <br />
                  Creat să dureze.
                </h2>

                <div className="space-y-6">
                  {[
                    { t: "Eficiență energetică", d: "Până la 80% mai puțin consum față de neonul tradițional." },
                    { t: "Durabilitate", d: "Peste 50.000 de ore de funcționare continuă." },
                    { t: "Siguranță", d: "Materiale rezistente, reci la atingere și sigure." }
                  ].map((item) => (
                    <div key={item.t} className="flex gap-4 items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold block text-white">{item.t}</span>
                        <span className="text-gray-400 text-sm">{item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition duration-700" />
                <Image
                  src="/images/maria18.jpeg"
                  alt="Quality Detail"
                  width={500}
                  height={500}
                  className="relative rounded-[2rem] w-full h-auto object-cover hover:scale-105 transition duration-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Ești gata să îți aduci ideea la viață?</h2>
          <Link
            href="/contact"
            className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition-all hover:shadow-neon-pink inline-block shadow-lg"
          >
            Discută cu noi astăzi
          </Link>
        </section>

      </div>
    </Layout>
  );
}
