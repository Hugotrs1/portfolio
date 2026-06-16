'use client';

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Container } from "./container";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <Disclosure as="header" className="sticky top-4 z-50">
      {() => (
        <Container className="max-w-5xl">
          <div className="overflow-hidden rounded-4xl border border-[color:var(--border)] bg-[color:var(--background)]/80 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <Link href="#about" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-soft))] text-sm font-semibold text-white shadow-sm">
                  HT
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">
                    Hugo Troussel
                  </p>
                  <p className="text-xs text-[color:var(--foreground)]/70">Développeur en alternance</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link text-sm font-semibold text-[color:var(--foreground)]/85 transition hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/assets/Cv Hugo Troussel.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-soft))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                >
                  CV
                </Link>
              </nav>

              <Disclosure.Button
                className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--foreground)]/90 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] md:hidden"
                aria-label="Basculer le menu"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <div className="space-y-1">
                  <span className="block h-0.5 w-6 bg-current" />
                  <span className="block h-0.5 w-4 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </div>
              </Disclosure.Button>
            </div>

            <Disclosure.Panel className="border-t border-[color:var(--border)] bg-[color:var(--background)]/90 md:hidden">
              <div className="flex flex-col gap-3 px-4 pb-4 pt-3 sm:px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-sm font-semibold text-[color:var(--foreground)]/85 transition hover:bg-white/10 hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/assets/Cv Hugo Troussel.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-soft))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  CV
                </Link>
              </div>
            </Disclosure.Panel>
          </div>
        </Container>
      )}
    </Disclosure>
  );
}

