import React, { useState } from "react";
import Layout from "../components/layout/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    signType: "Business",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your server or a form handling service
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      signType: "Business",
    });
  };

  return (
    <Layout
      title="Contactează-ne | Semne Neon Personalizate"
      description="Contactează echipa LIGHTIFY pentru a discuta despre proiectul tău de semn neon personalizat. Solicită o ofertă sau programează o consultare astăzi."
    >
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-800 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Contactează-ne
                </h2>
                <p className="mt-4 leading-7 text-gray-300">
                  Ai o idee pentru un semn neon personalizat? Suntem aici pentru
                  a te ajuta să o transformi în realitate.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-900 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">
                    Suport Vânzări
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-300">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-pink-500"
                          href="mailto:vanzari@lightify.ro"
                        >
                          vanzari@lightify.ro
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Număr de telefon</dt>
                      <dd>+40 700 000 000</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-900 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">
                    Suport Tehnic
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-300">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-pink-500"
                          href="mailto:suport@lightify.ro"
                        >
                          suport@lightify.ro
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Număr de telefon</dt>
                      <dd>+40 700 000 001</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-900 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">
                    Program
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-300">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>Luni - Vineri: 9:00 - 18:00</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Număr de telefon</dt>
                      <dd>Sâmbătă: 10:00 - 15:00</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-900 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">
                    Locație
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-300">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>București, Sector 1</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Număr de telefon</dt>
                      <dd>Str. Luminii, Nr. 42</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Solicită o Ofertă
                </h2>
                <p className="mt-4 leading-7 text-gray-300">
                  Completează formularul și te vom contacta cât mai curând
                  posibil pentru a discuta despre proiectul tău.
                </p>
              </div>
              <div className="lg:col-span-2">
                <form>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Prenume
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Nume
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Telefon
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="project-type"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Tipul Proiectului
                      </label>
                      <div className="mt-2.5">
                        <select
                          id="project-type"
                          name="project-type"
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                        >
                          <option>Afacere</option>
                          <option>Casă</option>
                          <option>Eveniment</option>
                          <option>Nuntă</option>
                          <option>Altele</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        Mesaj
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                          defaultValue={""}
                          placeholder="Spune-ne mai multe despre proiectul tău și ce tip de semn neon îți dorești..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                    >
                      Trimite Mesajul
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
