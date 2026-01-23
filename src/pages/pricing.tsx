import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const PRICING_TIERS = [
    {
        name: "Neon Text Standard",
        price: "de la 550 RON",
        description: "Ideal pentru nume, citate scurte sau cuvinte inspiraționale. Fonturi și culori la alegere.",
        features: [
            "Design personalizat",
            "Lățime până la 50cm",
            "Până la 8 caractere",
            "Garanție 24 luni"
        ],
        cta: "Solicită Ofertă",
        popular: false,
        color: "pink"
    },
    {
        name: "Logo & Premium",
        price: "de la 1000 RON",
        description: "Transformă logo-ul afacerii tale sau un design complex într-un semn neon spectaculos.",
        features: [
            "Design complex / Logo",
            "Consultanță design 1-la-1",
            "Opțiune RGB (schimbă culoarea)",
            "Garanție 24 luni"
        ],
        cta: "Configurează Acum",
        popular: true,
        color: "purple"
    },
    {
        name: "Proiecte Exclusive",
        price: "Contactează-ne",
        description: "Instalații de mari dimensiuni, panouri publicitare sau concepte artistice unice.",
        features: [
            "Dimensiuni nelimitate",
            "Consultanță design 1-la-1",
            "Mentenanță prioritară",
            "Garanție 24 luni"
        ],
        cta: "Discută Proiectul",
        popular: false,
        color: "blue"
    }
];

const PRICE_FACTORS = [
    {
        title: "Dimensiunea",
        desc: "Lungimea totală a tubului neon utilizat este principalul factor. Cu cât semnul este mai mare, cu atât necesită mai mult material și manoperă."
    },
    {
        title: "Complexitatea",
        desc: "Un text simplu este mai ușor de realizat decât un logo detaliat cu multe curbe strânse și elemente grafice fine."
    },
    {
        title: "Tipul de Suport",
        desc: "Baza de acril poate fi tăiată la formă sau dreptunghiulară, transparentă sau colorată, influențând estetica și costul final."
    },
    {
        title: "Tehnologia",
        desc: "Opțiunile precum culorile RGB (cu telecomandă) sau efectele de 'chasing light' adaugă un plus de valoare și cost."
    }
];

export default function Pricing() {
    return (
        <Layout
            title="Prețuri | Semne Neon Personalizate"
            description="Află cât costă un semn neon personalizat la LIGHTIFY. Transparență totală, pachete pentru orice buget și calitate premium garantată."
        >
            <div className="bg-black text-white selection:bg-pink-500/30">

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15)_0%,transparent_70%)] blur-[100px]" />

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <div className="inline-block px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-500 text-sm font-bold tracking-widest uppercase mb-8">
                            Investește în Atmosferă
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                            Prețuri <span className="text-glow-pink text-pink-500">Transparente</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Calitatea premium nu trebuie să fie un mister. Am creat structuri de preț clare pentru a te ajuta să-ți planifici proiectul ideal.
                        </p>
                    </div>
                </section>

                {/* Pricing Tiers */}
                <section className="py-24 relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PRICING_TIERS.map((tier) => (
                                <div
                                    key={tier.name}
                                    className={`relative glass-card rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 flex flex-col hover:-translate-y-2 ${tier.popular ? 'border-purple-500 shadow-neon-purple ring-1 ring-purple-500' : 'border-white/10 hover:border-pink-500/40'
                                        }`}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                                            Cel mai popular
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-3xl font-black ${tier.color === 'pink' ? 'text-pink-500' : (tier.color === 'purple' ? 'text-purple-500' : 'text-blue-500')}`}>
                                                {tier.price}
                                            </span>
                                        </div>
                                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                                            {tier.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                                                <svg className={`shrink-0 w-5 h-5 ${tier.color === 'pink' ? 'text-pink-500' : (tier.color === 'purple' ? 'text-purple-500' : 'text-blue-500')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${tier.popular
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-neon-purple hover:opacity-90'
                                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                            }`}
                                    >
                                        {tier.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Price Factors Section */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-8 leading-tight">
                                    Ce influențează <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Costul Semnului Tău?</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                                    {PRICE_FACTORS.map((factor) => (
                                        <div key={factor.title}>
                                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                                {factor.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {factor.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50" />
                                <div className="relative glass-card p-10 rounded-[2rem] border-white/10">
                                    <h3 className="text-2xl font-bold mb-6 italic">Exemplu de calcul:</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-4 border-bottom border-white/5">
                                            <span className="text-gray-400">Cuvântul "Dream" (40cm)</span>
                                            <span className="font-bold">~ 550 RON</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-bottom border-white/5">
                                            <span className="text-gray-400">Logo "Coffee Shop" (60cm)</span>
                                            <span className="font-bold">~ 1500 RON</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-bottom border-white/5">
                                            <span className="text-gray-400">Semn "Wedding Day" + Controler RGB</span>
                                            <span className="font-bold">~ 2000 RON</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                            * Prețurile sunt estimative și includ TVA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/5 rounded-full blur-[120px]" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                Vrei un preț exact <br />
                                <span className="text-glow-purple text-purple-500">în 24 de ore?</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                Trimite-ne ideea ta, dimensiunile aproximative și culorile dorite. Revizuim proiectul și îți trimitem o simulare gratuită și prețul final.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                OBȚINE OFERTA TA ACUM
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
