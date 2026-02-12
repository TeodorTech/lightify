import React from "react";
import Layout from "../components/layout/Layout";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import TrustSection from "../components/contact/TrustSection";
import InspirationGallery from "../components/contact/InspirationGallery";

export default function Contact() {
  return (
    <Layout
      title="Contact Lightify | Obține Oferta Ta Neon Personalizată"
      description="Începe proiectul tău neon astăzi. Primești consultanță gratuită și un mockup digital pentru semnul tău neon. Calitate premium, livrare rapidă în toată țara."
      keywords="contact lightify, oferta neon personalizat, mockup gratuit neon, preturi semne neon, comanda neon bucuresti"
    >
      <div className="bg-black min-h-screen pt-32 pb-24 selection:bg-pink-500/30 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <ContactHeader />

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ContactForm />
            <TrustSection />
          </div>

          <InspirationGallery />

        </div>
      </div>
    </Layout>
  );
}
