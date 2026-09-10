import { coverage, site, whatsappUrl } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-forest text-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5 font-serif text-2xl">
            <Logo className="h-9 w-9 shrink-0" />
            {site.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-card/70">
            {site.veterinarian}
            <br />
            {site.degree}
            <br />
            {site.university}
            <br />
            Atención a domicilio en el Gran {site.city}
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-card/50">
            Contacto
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block hover:underline"
          >
            WhatsApp {site.phoneDisplay}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 hover:underline"
          >
            <Icon name="instagram" className="h-3.5 w-3.5" />
            @{site.instagram}
          </a>
          <p className="mt-1 text-card/70">{site.hours}</p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-card/50">
            Cobertura
          </p>
          <p className="mt-3 leading-relaxed text-card/70">
            {coverage.join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-card/45">
        © 2026 {site.name} · {site.city}
      </div>
    </footer>
  );
}
