"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile, type Dict, type Locale } from "@/content";

type Props = { lang: Locale; nav: Dict["nav"] };

export default function Header({ lang, nav }: Props) {
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "en" ? "fr" : "en";

  const links = [
    { href: "#work", label: nav.work },
    { href: "#stack", label: nav.stack },
    { href: "#experience", label: nav.experience },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-4 md:h-[70px] md:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center bg-ink text-[11px] font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden text-xs uppercase tracking-wider sm:block">
            Rahil M. Islam
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <span className="hidden items-center gap-2 text-[11px] uppercase tracking-wider text-muted lg:flex">
            <span className="size-2 animate-pulse-dot bg-accent" />
            {nav.available}
          </span>
          <Link
            href={`/${other}`}
            className="border border-line px-2 py-1.5 text-[11px] uppercase tracking-wider transition-colors hover:border-ink"
            aria-label={other === "fr" ? "Version française" : "English version"}
          >
            <span className={lang === "en" ? "font-bold" : "text-soft"}>EN</span>
            <span className="text-soft"> / </span>
            <span className={lang === "fr" ? "font-bold" : "text-soft"}>FR</span>
          </Link>
          <a
            href="#contact"
            className="hidden bg-ink px-4 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-accent hover:text-ink sm:block"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.close : nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-ink px-4 py-3 text-center text-xs uppercase tracking-wider text-white"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
