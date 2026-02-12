import React, { useState, useEffect } from "react";

type ProjectCategory = "Business" | "Personal" | "Event" | "Other";

const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
    { id: "Business", label: "Afacere" },
    { id: "Personal", label: "Personal" },
    { id: "Event", label: "Eveniment" },
    { id: "Other", label: "Altul" },
];

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    signType: ProjectCategory;
    wantsMockup: boolean;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        signType: "Business",
        wantsMockup: true,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formProgress, setFormProgress] = useState(0);

    useEffect(() => {
        const fields: (keyof ContactFormData)[] = ["name", "email", "phone", "message"];
        const filledFields = fields.filter(field => formData[field]?.toString().length > 0).length;
        setFormProgress((filledFields / fields.length) * 100);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const setSignType = (type: ProjectCategory) => {
        setFormData(prev => ({ ...prev, signType: type }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormSubmitted(true);
            } else {
                const data = await response.json();
                setErrorMessage(data.error || "A intervenit o eroare. Te rugăm să încerci din nou.");
            }
        } catch (error) {
            setErrorMessage("Eroare de conexiune. Te rugăm să verifici internetul.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (formSubmitted) {
        return (
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10 text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Proiectul tău a început!</h2>
                    <p className="text-gray-400 text-lg mb-8">Te vom contacta în curând cu detaliile și mockup-ul solicitat.</p>
                    <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-pink-500 font-bold hover:text-pink-400 transition-colors flex items-center gap-2 mx-auto"
                    >
                        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        Trimite altă solicitare
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10">

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5 rounded-t-[2.5rem] overflow-hidden">
                    <div
                        className="h-full bg-pink-500 transition-all duration-500 ease-out"
                        style={{ width: `${formProgress}%` }}
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Solicită Ofertă & Mockup</h2>
                        <p className="text-sm text-gray-500">Durează mai puțin de 60 de secunde să începi.</p>
                    </div>

                    {/* Step 1: Easiest - Category (1 click) */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Despre ce proiect este vorba?</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {PROJECT_CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setSignType(category.id)}
                                    className={`py-3 rounded-xl text-xs font-bold transition-all border ${formData.signType === category.id
                                        ? "bg-pink-500 border-pink-500 text-white shadow-neon-pink"
                                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Name (Standard) */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Nume Complet</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-700"
                            placeholder="Andrei Ionescu"
                        />
                    </div>

                    {/* Step 3: Description (Engagement) */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Scurtă descriere (Opțional)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium resize-none placeholder:text-gray-700 text-sm"
                            placeholder="Ex: Vreau un logo pentru cafeneaua mea cu textul 'Coffee Time'..."
                        />
                    </div>

                    {/* Step 4: Contact (Highest commitment) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Telefon</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-700"
                                placeholder="07xx xxx xxx"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email (Opțional)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-700"
                                placeholder="andrei@exemplu.ro"
                            />
                        </div>
                    </div>

                    {/* Incentive Checkbox */}
                    <label className="flex items-start gap-4 p-4 rounded-2xl bg-pink-500/5 border border-pink-500/20 cursor-pointer hover:bg-pink-500/10 transition-all">
                        <div className="flex items-center h-6">
                            <input
                                type="checkbox"
                                name="wantsMockup"
                                checked={formData.wantsMockup}
                                onChange={handleChange}
                                className="w-5 h-5 rounded border-white/20 bg-black text-pink-500 focus:ring-pink-500 accent-pink-500"
                            />
                        </div>
                        <div className="text-sm">
                            <span className="block text-white font-bold">Vreau un mockup digital GRATUIT ✨</span>
                            <span className="block text-gray-500 text-xs">Vom crea o simulare vizuală pentru ideea ta, fără nicio obligație.</span>
                        </div>
                    </label>

                    {errorMessage && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm animate-in fade-in slide-in-from-top-2">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-pink-600 text-white font-black rounded-2xl hover:bg-pink-500 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group/btn"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Se procesează...
                                </>
                            ) : (
                                <>
                                    Trimite Solicitarea
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                    </button>

                    <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                        Garantăm răspuns în maximum 24h
                    </p>
                </form>
            </div>
        </div>
    );
}
