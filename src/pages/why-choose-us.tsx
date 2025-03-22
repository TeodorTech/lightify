import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function WhyChooseUs() {
  return (
    <Layout
      title="De ce Lightify | Semne Neon Personalizate"
      description="Descoperă de ce LIGHTIFY este alegerea preferată pentru semne neon personalizate - calitate superioară, design creativ și servicii excepționale."
    >
      {/* Hero Section */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              De ce <span className="text-pink-500">Lightify</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              La LIGHTIFY, ne dedicăm excelenței în fiecare semn neon pe care îl
              creăm. Descoperă ce ne diferențiază și de ce clienții ne aleg
              constant.
            </p>
          </div>
        </div>
      </div>

      {/* Key Differences Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Calitate Meșteșugărească",
                description:
                  "Fiecare semn este creat manual cu meticulozitate de echipa noastră de artizani calificați cu ani de experiență în designul neon.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.055 2.264-.22 2.814Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Materiale Premium",
                description:
                  "Folosim doar LED neon flex și componente de cea mai înaltă calitate, asigurându-ne că semnul tău este nu doar uimitor, ci și durabil.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Servicii Personalizate",
                description:
                  "De la concept la instalare, lucrăm îndeaproape cu tine pentru a ne asigura că viziunea ta este perfect realizată.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="rounded-md bg-pink-500 p-2 ring-1 ring-white/10">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-7 tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-pink-500">
              Procesul Nostru
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cum creăm semnul tău personalizat
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Am eficientizat procesul nostru pentru a face obținerea semnului
              tău neon personalizat ușoară și plăcută.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {[
                {
                  title: "1. Consultare",
                  description:
                    "Împărtășește-ți viziunea cu echipa noastră de design. Te vom ajuta să-ți rafinezi ideile și să-ți oferim îndrumare de specialitate.",
                },
                {
                  title: "2. Design",
                  description:
                    "Designerii noștri creează un concept vizual al semnului tău pentru revizuire și aprobare.",
                },
                {
                  title: "3. Producție",
                  description:
                    "Odată aprobat, meșterii noștri creează cu atenție semnul tău neon manual.",
                },
                {
                  title: "4. Livrare",
                  description:
                    "Semnul tău este ambalat cu grijă și livrat cu instrucțiuni de instalare și suport.",
                },
              ].map((step) => (
                <div key={step.title} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-white">
                    {step.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="overflow-hidden bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-pink-500">
                  Calitate Garantată
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Creat să Impresioneze. Creat să Dureze.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Garantăm calitatea fiecărui semn neon personalizat pe care îl
                  creăm.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {[
                    {
                      title: "Eficiență Energetică",
                      description:
                        "Semnele noastre neon LED folosesc cu până la 80% mai puțină energie decât neonul tradițional din sticlă, economisind bani și fiind prietenoase cu mediul.",
                    },
                    {
                      title: "Durabilitate Mare",
                      description:
                        "Cu până la 50.000 de ore de iluminare, semnul tău va străluci intens pentru mulți ani.",
                    },
                    {
                      title: "Sigur și Rezistent",
                      description:
                        "Spre deosebire de tuburile fragile din sticlă, semnele noastre sunt realizate din materiale durabile, care nu se sparg, sunt reci la atingere și sigure pentru toate mediile.",
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-pink-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature.title}
                      </dt>
                      <dd className="inline">{` — ${feature.description}`}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
              <div className="relative w-full md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1549434079-935f4e1c5566?w=800&q=80"
                  alt="High quality neon sign manufacturing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-white">
            Pregătit să îți aduci viziunea la viață?
          </h2>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Discută Cu Noi Astăzi
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
