import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "De ce Lightify", href: "/why-choose-us" },
  { name: "Portofoliu", href: "/portfolio" },
  { name: "Despre", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Function to check if the current route matches the nav item
  const isCurrentRoute = (href: string) => {
    return href === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(href);
  };

  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">LIGHTIFY</span>
            <h1 className="text-2xl font-bold tracking-tight text-pink-500">
              LIGHT<span className="text-purple-500">IFY</span>
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Deschide meniul</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                isCurrentRoute(item.href)
                  ? "text-pink-500"
                  : "text-white hover:text-pink-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-700"
          >
            Solicită Ofertă
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">LIGHTIFY</span>
                <h1 className="text-2xl font-bold tracking-tight text-pink-500">
                  LIGHT<span className="text-purple-500">IFY</span>
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Închide meniul</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-purple-500/30">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <Link
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-900 text-center ${
                          isCurrentRoute(item.href)
                            ? "text-pink-500"
                            : "text-white"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {index < navigation.length - 1 && (
                        <div className="h-px bg-purple-500/30 mx-8 my-2"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900 text-center bg-gradient-to-r from-pink-500 to-purple-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solicită Ofertă
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
