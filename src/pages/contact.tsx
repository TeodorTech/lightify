import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { BRAND } from "../constants/navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    signType: "Business",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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

  const contactInfos = [
    {
      title: "Suport Vânzări",
      email: BRAND.contact.email,
      phone: BRAND.contact.phone,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Locația Noastră",
      text: BRAND.contact.address,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Program Lucru",
      text: "Luni - Vineri: 09:00 - 18:00",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout
      title="Contactează-ne | Semne Neon Personalizate"
      description="Contactează echipa LIGHTIFY pentru a discuta despre proiectul tău."
    >
      <div className="bg-black min-h-screen pt-40 pb-24 selection:bg-pink-500/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                  Hai să <span className="text-glow-pink text-pink-500">Strălucim</span> <br />
                  Împreună
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                  Ai o viziune? Noi avem lumina. Completează formularul sau contactează-ne direct prin metodele de mai jos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfos.map((info) => (
                  <div key={info.title} className="glass-card p-8 rounded-3xl group hover:border-pink-500/30 transition-all duration-500 text-left">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <div className="text-sm text-gray-400 space-y-1">
                      {info.email && <p className="hover:text-pink-500 transition-colors cursor-pointer">{info.email}</p>}
                      {info.phone && <p>{info.phone}</p>}
                      {info.text && <p>{info.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-[2.5rem] blur-3xl" />
              <div className="relative glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10">
                {formSubmitted ? (
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Mesaj Trimis!</h2>
                    <p className="text-gray-400">Te vom contacta în cel mai scurt timp posibil.</p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-8 text-pink-500 font-bold hover:underline"
                    >
                      Trimite alt mesaj
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Prenume</label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium"
                          placeholder="Ex. Andrei"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nume</label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium"
                          placeholder="Ex. Ionescu"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium"
                          placeholder="andrei@exemplu.ro"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium"
                          placeholder="07xx xxx xxx"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Tip Proiect</label>
                      <select
                        name="signType"
                        value={formData.signType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium appearance-none"
                      >
                        <option value="Business">Afacere / Logo</option>
                        <option value="Home">Decor Casă</option>
                        <option value="Event">Eveniment / Nuntă</option>
                        <option value="Other">Altul</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mesaj</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all font-medium resize-none"
                        placeholder="Spune-ne mai multe despre ideea ta..."
                      />
                    </div>

                    {errorMessage && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl mb-6 text-sm animate-in fade-in slide-in-from-top-2">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-pink-500 text-white font-extrabold rounded-2xl hover:bg-pink-400 transition-all hover:shadow-neon-pink transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? "Se trimite..." : "Trimite Solicitarea"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}
