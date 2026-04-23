import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout/Layout";
import {
  portfolioItems,
  getItemBySlug,
  getSimilarItems,
  getLongDescription,
  CATEGORY_FAQS,
  CATEGORY_LABELS,
  PortfolioItem,
  FAQItem,
} from "../../constants/portfolio";

interface NeonDetailProps {
  item: PortfolioItem;
  longDescription: string;
  similarItems: PortfolioItem[];
  faqs: FAQItem[];
}

const SITE_URL = "https://lightify.ro";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: portfolioItems.map((item) => ({ params: { slug: item.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<NeonDetailProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const item = getItemBySlug(slug);
  if (!item) return { notFound: true };

  return {
    props: {
      item,
      longDescription: getLongDescription(item),
      similarItems: getSimilarItems(item, 3),
      faqs: CATEGORY_FAQS[item.category],
    },
  };
};

export default function NeonDetail({ item, longDescription, similarItems, faqs }: NeonDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageUrl = `${SITE_URL}/neon-personalizat/${item.slug}`;
  const metaDescription = longDescription.replace(/\n+/g, " ").slice(0, 155).trim();
  const categoryLabel = CATEGORY_LABELS[item.category];
  const ctaSubject = `Vreau un neon similar cu "${item.title}"`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Portofoliu", item: `${SITE_URL}/portofoliu-semne-neon` },
      { "@type": "ListItem", position: 3, name: item.title, item: pageUrl },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.title,
    image: [`${SITE_URL}${item.imageUrl}`],
    description: metaDescription,
    brand: { "@type": "Brand", name: "Lightify" },
    category: `Neon personalizat / ${categoryLabel}`,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "RON",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RON",
      },
      seller: { "@type": "Organization", name: "Lightify" },
    },
  };

  const paragraphs = longDescription.split(/\n+/).filter(Boolean);

  return (
    <Layout
      title={`${item.title} — Neon Personalizat Handmade`}
      description={metaDescription}
      keywords={`${item.title.toLowerCase()}, neon personalizat, semn luminos ${categoryLabel.toLowerCase()}, neon ${item.category}, lightify bucurești`}
      canonical={pageUrl}
      ogImage={item.imageUrl}
      faqItems={faqs}
      extraSchemas={[breadcrumbSchema, productSchema]}
    >
      <div className="bg-black min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-bold">
              <li>
                <Link href="/" className="hover:text-pink-500 transition-colors">Acasă</Link>
              </li>
              <li className="text-gray-700">›</li>
              <li>
                <Link href="/portofoliu-semne-neon" className="hover:text-pink-500 transition-colors">Portofoliu</Link>
              </li>
              <li className="text-gray-700">›</li>
              <li className="text-pink-500 truncate max-w-[200px] sm:max-w-none" aria-current="page">{item.title}</li>
            </ol>
          </nav>

          {/* Hero Image */}
          <div className="relative aspect-[16/10] glass-card rounded-[2rem] overflow-hidden mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Image
              src={item.imageUrl}
              alt={`${item.title} — semn neon personalizat realizat de Lightify`}
              fill
              priority
              className={item.objectFit === "contain" ? "object-contain" : "object-cover"}
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-pink-500 font-bold">
              {categoryLabel}
            </div>
          </div>

          {/* Title + short description */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white text-glow-pink mb-6">
              {item.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </div>

          {/* Long description */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6">Despre acest proiect</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed text-[17px]">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Personalized CTA */}
          <section className="mb-20 glass-card rounded-[2.5rem] p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vrei un neon similar?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Îți creăm gratuit un mockup digital personalizat pornind de la acest design. Răspundem în 24 de ore.
              </p>
              <Link
                href={`/contact?subject=${encodeURIComponent(ctaSubject)}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition-all hover:shadow-neon-pink"
              >
                Vreau un neon similar
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Întrebări frecvente</h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-bold text-white text-[15px]">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Similar projects */}
          {similarItems.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8">Proiecte similare</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarItems.map((similar) => (
                  <Link
                    key={similar.id}
                    href={`/neon-personalizat/${similar.slug}`}
                    className="group glass-card rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={similar.imageUrl}
                        alt={similar.title}
                        fill
                        className={`${similar.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                        {similar.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {similar.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to portfolio */}
          <div className="text-center">
            <Link
              href="/portofoliu-semne-neon"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Vezi tot portofoliul
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
