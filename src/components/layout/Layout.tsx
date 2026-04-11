import React, { ReactNode } from "react";
import SEO from "../seo/SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface FAQItem {
  question: string;
  answer: string;
}

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  faqItems?: FAQItem[];
  extraSchemas?: object[];
}

export default function Layout({ children, title, description, keywords, faqItems, extraSchemas }: LayoutProps) {
  const pageDescription =
    description ||
    "Handcrafted custom neon signs for home, business, and events. Bring your space to life with LIGHTIFY.";

  return (
    <>
      <SEO
        title={title || "Semne Neon Personalizate"}
        description={pageDescription}
        keywords={keywords}
        faqItems={faqItems}
        extraSchemas={extraSchemas}
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
