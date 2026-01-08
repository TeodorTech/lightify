import React from "react";
import Head from "next/head";
import { BRAND } from "../../constants/navigation";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

export default function SEO({
    title,
    description,
    canonical,
    ogType = "website",
    ogImage = "/images/og-image.jpg", // Default OG image
    twitterHandle = "@lightify_ro",
}: SEOProps) {
    const siteName = "LIGHTIFY";
    const fullTitle = `${title} | ${siteName}`;
    const url = "https://lightify.ro"; // Update with real domain if different

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteName,
        "image": [`${url}${ogImage}`],
        "@id": `${url}/#organization`,
        "url": url,
        "telephone": BRAND.contact.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BRAND.contact.address,
            "addressLocality": "București",
            "postalCode": "041551",
            "addressCountry": "RO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.3855,
            "longitude": 26.1158
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/lightify.ro",
            "https://www.instagram.com/lightify_ro/"
        ]
    };

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical || url} />
            <meta property="og:image" content={`${url}${ogImage}`} />
            <meta property="og:locale" content="ro_RO" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${ogImage}`} />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>
    );
}
