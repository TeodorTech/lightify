import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout
      title="Despre Noi | Semne Neon Personalizate"
      description="Află povestea din spatele LIGHTIFY. Suntem o echipă pasionată de creatori de semne neon, dedicați adusării viziunilor tale în lumină."
    >
      {/* Hero Section */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Despre <span className="text-pink-500">LIGHTIFY</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Suntem o echipă pasionată de artiști și meseriași dedicați creării
              de semne neon personalizate de înaltă calitate care aduc la viață
              viziunile clienților noștri.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Povestea Noastră
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  LIGHTIFY a început ca un atelier mic, fondat de un grup de
                  artiști pasionați care împărtășeau o dragoste pentru arta
                  neon. Am pornit cu misiunea de a revitaliza această formă de
                  artă clasică și de a o aduce în era modernă.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  De-a lungul anilor, ne-am extins echipa și capacitățile, dar
                  valorile noastre de bază au rămas aceleași: meșteșugărie de
                  calitate, servicii personalizate și un angajament față de
                  satisfacția clienților.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Astăzi, suntem mândri să furnizăm semne neon uimitoare pentru
                  clienți din întreaga țară, de la proprietari de afaceri mici
                  la branduri mari și persoane care doresc să adauge o notă
                  specială spațiului lor.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?ixlib=rb-1.2.1&q=80&fm=jpg&w=800"
                alt="Echipa LIGHTIFY lucrând la semne neon"
                width={600}
                height={400}
                className="rounded-xl shadow-xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Valorile Noastre
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Principiile noastre fundamentale ghidează tot ceea ce facem la
              LIGHTIFY, de la procesul de design până la serviciul clienți.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>
                  </div>
                  Meșteșugărie de Calitate
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Ne angajăm la cele mai înalte standarde în fiecare semn pe
                  care îl creăm. Nu facem compromisuri privind calitatea
                  materialelor sau atenția la detalii.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      ></path>
                    </svg>
                  </div>
                  Excelență Creativă
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Îmbinăm meșteșugul tradițional cu designul modern pentru a
                  crea opere de artă neon care sunt atât estetice, cât și
                  funcționale.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      ></path>
                    </svg>
                  </div>
                  Satisfacția Clienților
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Îți ascultăm viziunea și lucrăm îndeaproape cu tine pentru a
                  ne asigura că fiecare semn neon depășește așteptările tale.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      ></path>
                    </svg>
                  </div>
                  Inovație Sustenabilă
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Explorăm în mod constant metode și materiale noi pentru a face
                  produsele noastre mai eficiente energetic și mai prietenoase
                  cu mediul.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Pregătit să colaborezi cu noi?</span>
            <span className="block text-pink-500">
              Hai să aducem ideile tale la viață.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600"
              >
                Contactează-ne
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-500 bg-white hover:bg-gray-50"
              >
                Vezi Lucrările Noastre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
