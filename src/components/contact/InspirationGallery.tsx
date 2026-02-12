import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InspirationGallery() {
    const images = [
        { src: "/images/jidvei.webp", alt: "Logo Neon Jidvei" },
        { src: "/images/neon-lips.webp", alt: "Neon Lips Decor" },
        { src: "/images/on-air.webp", alt: "On Air Neon Sign" },
        { src: "/images/thunder.webp", alt: "Thunder Neon Design" },
    ];

    return (
        <div className="mt-40 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4">Inspirație pentru proiectul tău</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Vom crea ceva cel puțin la fel de spectaculos și pentru tine.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div key={idx} className="aspect-square relative rounded-3xl overflow-hidden group glass-card">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <p className="text-white text-xs font-bold tracking-widest uppercase">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Link href="/portofoliu-semne-neon" className="inline-flex items-center gap-2 text-pink-500 font-bold hover:underline">
                    Vezi tot portofoliul
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
            </div>
        </div>
    );
}
