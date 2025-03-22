import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout
      title="Semne Neon Personalizate"
      description="LIGHTIFY creează semne neon premium personalizate pentru case, afaceri și evenimente. Transformă-ți spațiul cu arta noastră din neon."
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681400783826-8ae188a981b7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fundal lumini neon"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Semne Neon Personalizate{" "}
            <span className="block text-pink-500">
              Realizate Manual Pentru Spațiul Tău
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Transformă-ți ideile în realitate cu semnele noastre neon
            personalizate premium. Perfecte pentru case, afaceri, evenimente și
            multe altele.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                href="/portfolio"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 sm:px-8"
              >
                Vezi Lucrările Noastre
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-pink-500 bg-white hover:bg-gray-50 sm:px-8"
              >
                Solicită o Ofertă
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lucrări Reprezentative
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Câteva dintre cele mai populare creații personalizate de semne
              neon
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="flex flex-col items-start">
                <div className="relative w-full">
                  <div className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-w-4 aspect-h-3 relative h-64">
                      <Image
                        src={
                          item === 1
                            ? "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?w=600&h=400&q=80"
                            : item === 2
                            ? "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?w=600&h=400&q=80"
                            : "https://images.unsplash.com/photo-1558050032-160f36233a07?w=600&h=400&q=80"
                        }
                        alt={`Semn neon reprezentativ ${item}`}
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2023-03-16" className="text-gray-400">
                      Proiect Recent
                    </time>
                    <span className="relative z-10 rounded-full bg-pink-600 px-3 py-1.5 font-medium text-white">
                      {item === 1 ? "Afaceri" : item === 2 ? "Casă" : "Nuntă"}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <span className="absolute inset-0" />
                      {item === 1
                        ? "Semn Neon Logo Restaurant"
                        : item === 2
                        ? "Neon Personalizat Pentru Casă"
                        : "Panou cu Nume Pentru Nuntă"}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                      {item === 1
                        ? "Semn neon personalizat creat pentru un restaurant local, îmbunătățind identitatea și atmosfera brandului."
                        : item === 2
                        ? "Mesaj personalizat pentru o casă modernă, adăugând caracter spațiului de locuit."
                        : "Panou elegant cu nume creat pentru o recepție de nuntă, perfect pentru fundalul fotografiilor."}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Vezi Toate Lucrările
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-pink-500">
              Cum Lucrăm
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              De la Concept la Creație
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Procesul nostru simplu face ușoară obținerea semnului tău neon
              personalizat. Noi ne ocupăm de tot, de la design până la
              instalare.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Consultare Design",
                  description:
                    "Împărtășește-ți viziunea cu echipa noastră de design. Te vom ajuta să-ți rafinezi ideile și să creăm un concept care se potrivește stilului tău.",
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
                        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Producție",
                  description:
                    "Meșterii noștri calificați creează cu atenție semnul tău neon manual, asigurând calitate înaltă și atenție la detalii.",
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
                  title: "Livrare & Suport",
                  description:
                    "Semnul tău este ambalat cu grijă și livrat la ușa ta cu instrucțiuni clare de instalare și suport continuu.",
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
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-pink-500 text-white">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Gata să-ți luminezi spațiul?</span>
            <span className="block text-pink-500">Contactează-ne astăzi.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600"
              >
                Solicită o Ofertă
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-500 bg-white hover:bg-gray-50"
              >
                Vezi Portofoliul
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
