import React from "react";
import { BRAND } from "../../constants/navigation";

export default function TrustSection() {
    return (
        <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-3xl border-white/5 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)] flex-shrink-0">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg leading-tight">100+ Clienți Fericiți</p>
                        <p className="text-xs text-gray-500 mt-1">Suntem onorați de încrederea fiecărui client.</p>
                    </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border-white/5 flex flex-col items-start gap-4">
                    <div className="flex gap-1 text-yellow-500">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <div>
                        <p className="text-white font-bold">Rating 5/5</p>
                        <p className="text-xs text-gray-500">Excelență în design și suport clienți.</p>
                    </div>
                </div>
            </div>

            {/* Social Proof Quote */}
            <div className="border-l-4 border-pink-500 pl-6 py-2">
                <p className="italic text-gray-300 text-lg">
                    "Lightify a transformat complet recepția noastră. Atenția la detalii este incredibilă!"
                </p>
                <p className="mt-2 text-pink-500 font-bold tracking-widest text-xs uppercase">
                    Andrei M., Proprietar Afacere
                </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap gap-3">
                <a href={`tel:${BRAND.contact.phone}`} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-sm text-gray-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {BRAND.contact.phone}
                </a>
                <a href={`mailto:${BRAND.contact.email}`} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-sm text-gray-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {BRAND.contact.email}
                </a>
            </div>
        </div>
    );
}
