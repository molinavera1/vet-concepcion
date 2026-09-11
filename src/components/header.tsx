"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { site, whatsappUrl } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Prestaciones" },
  { href: "#precios", label: "Aranceles" },
  { href: "#vacunas", label: "Vacunas" },
  { href: "#zona", label: "Cobertura" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#videos", label: "Videos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5 leading-tight">
          <Logo className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <span>
            <span className="block font-serif text-lg font-semibold text-forest sm:text-xl">
              {site.name}
            </span>
            <span className="hidden text-[11px] text-muted sm:block">
              Veterinaria a domicilio · {site.city}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-forest lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-sage"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-forest px-4 py-2 text-sm font-medium text-card transition hover:bg-sage sm:inline-flex"
        >
          Agendar visita
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-forest lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-forest" />
            <span className="block h-0.5 w-4 bg-forest" />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-forest">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-card"
            >
              Agendar visita
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
