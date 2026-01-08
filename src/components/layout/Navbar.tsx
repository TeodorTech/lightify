import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { NAVIGATION, BRAND } from "../../constants/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isCurrentRoute = (href: string) => {
    return href === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-neon-purple" : "bg-transparent py-6"
          }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">{BRAND.name}</span>
              <h1 className="text-2xl font-extrabold tracking-tighter text-pink-500 text-glow-pink">
                {BRAND.logo.first}<span className="text-purple-500 text-glow-purple">{BRAND.logo.second}</span>
              </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-pink-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Deschide meniul</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold leading-6 transition-all duration-200 uppercase tracking-widest ${isCurrentRoute(item.href)
                  ? "text-pink-500 text-glow-pink translate-y-[-1px]"
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
              className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-neon-pink"
            >
              <span className="relative">Solicită Ofertă</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-black border-l border-white/10 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <h1 className="text-2xl font-bold tracking-tight text-pink-500">
                  {BRAND.logo.first}<span className="text-purple-500">{BRAND.logo.second}</span>
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:text-pink-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Închide meniul</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-12 flow-root">
              <div className="space-y-4">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-xl px-4 py-4 text-lg font-bold transition-all duration-200 border ${isCurrentRoute(item.href)
                      ? "bg-pink-500/10 border-pink-500 text-pink-500"
                      : "border-white/5 text-white hover:bg-white/5"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-8">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-neon-pink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solicită Ofertă
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>

  );
}
