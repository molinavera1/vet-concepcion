import Image from "next/image";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { InstagramReels } from "@/components/instagram-reels";
import { Icon } from "@/components/icons";
import { getLatestReels } from "@/lib/instagram";
import {
  catVaccines,
  coverage,
  coverageMap,
  dogVaccines,
  faqs,
  services,
  site,
  steps,
  visitFee,
  whatsappUrl,
} from "@/lib/site";

export default async function Home() {
  const reels = await getLatestReels();

  return (
    <main id="inicio" className="flex-1">
      <section className="relative overflow-hidden border-b border-line bg-[#3a3a36]">
        <HeroBackdrop />
        <div className="relative mx-auto flex min-h-[32rem] w-full max-w-6xl flex-col justify-between px-5 py-10 sm:min-h-[38rem] sm:px-8 sm:py-12 lg:min-h-[44rem] lg:py-14">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-card/80">
              Veterinaria a domicilio · Gran {site.city}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-card sm:text-[2.6rem]">
              Atención clínica en la casa de tu mascota
            </h1>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-sm font-medium text-card hover:bg-sage"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-md border border-card/50 px-5 py-3 text-sm font-medium text-card hover:bg-card/10"
              >
                Ver aranceles
              </a>
            </div>
            <p className="mt-5 text-sm text-card/80">{site.hours}</p>
          </div>
        </div>
      </section>

      <div className="border-b border-line bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 text-sm text-forest sm:grid-cols-3 sm:px-8">
          <p className="flex gap-3">
            <Icon name="stethoscope" className="mt-0.5 h-5 w-5 text-sage" />
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Atención
              </span>
              Perros y gatos, en tu domicilio
            </span>
          </p>
          <p className="flex gap-3">
            <Icon name="school" className="mt-0.5 h-5 w-5 text-sage" />
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Formación
              </span>
              {site.university}
            </span>
          </p>
          <p className="flex gap-3">
            <Icon name="shield" className="mt-0.5 h-5 w-5 text-sage" />
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Urgencias
              </span>
              Si hay riesgo vital, el lugar adecuado es un servicio de urgencia
              cercano.
            </span>
          </p>
        </div>
      </div>

      <section className="border-b border-line bg-card px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <div className="w-full max-w-[200px] shrink-0">
            <div className="overflow-hidden rounded-full shadow-[0_24px_50px_-24px_rgba(27,68,80,0.55)] ring-[3px] ring-sage/20">
              <Image
                src="/matilde.jpg"
                alt="Matilde Camposano Schuck, médica veterinaria"
                width={400}
                height={400}
                className="aspect-square w-full object-cover object-[50%_18%]"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-serif text-2xl text-forest">{site.veterinarian}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {site.degree} de la {site.university}.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              Consultas, vacunas, muestras, desparasitación y microchip.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-6xl items-center justify-center gap-5">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-8 w-8 items-center justify-center text-forest transition-colors hover:text-sage"
          >
            <Icon name="instagram" className="h-7 w-7" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-8 w-8 items-center justify-center text-forest transition-colors hover:text-sage"
          >
            <Icon name="whatsapp" className="h-7 w-7" />
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center text-forest transition-colors hover:text-sage"
          >
            <Icon name="linkedin" className="h-7 w-7" />
          </a>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              Prestaciones
            </h2>
            <p className="mt-3 text-muted">
              En este orden se trabaja una visita: primero el examen, después
              vacunas o desparasitación, y si corresponde muestras o microchip.
              Cirugía, internación o radiografías no se hacen en casa.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-xl border border-line bg-card p-5 shadow-[0_12px_30px_-22px_rgba(27,68,80,0.45)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/10 text-sage">
                  <Icon name={service.icon} />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl text-forest">{service.title}</h3>
                  <p className="shrink-0 text-sm font-medium text-sage">
                    {service.price}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="precios"
        className="scroll-mt-24 border-y border-line bg-card px-5 py-16 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              Aranceles de referencia
            </h2>
            <p className="max-w-md text-sm text-muted">{site.pricingNote}</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-[0_12px_30px_-22px_rgba(27,68,80,0.4)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-background text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">Prestación</th>
                  <th className="px-5 py-3 font-medium">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-card">
                <tr>
                  <td className="px-5 py-4">
                    <p className="font-medium text-forest">{visitFee.title}</p>
                    <p className="mt-1 text-muted">{visitFee.description}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-sage">
                    {visitFee.price}
                  </td>
                </tr>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="px-5 py-4 font-medium text-forest">
                      {service.title}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-sage">
                      {service.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="vacunas" className="scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Vacunas
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            El esquema se define según edad, historial y si convive o sale.
            Los valores son de referencia e incluyen la aplicación en domicilio;
            el desplazamiento se suma aparte.
          </p>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_-28px_rgba(27,68,80,0.45)]">
              <div className="relative h-44">
                <Image
                  src="/pets-dogs.jpg"
                  alt="Perros"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-sage">
                  Perros
                </h3>
                <ul className="mt-4 divide-y divide-line">
                  {dogVaccines.map((v) => (
                    <li key={v.name} className="flex items-start justify-between gap-4 py-4 first:pt-0">
                      <div>
                        <p className="font-medium text-forest">{v.name}</p>
                        <p className="mt-1 text-sm text-muted">{v.detail}</p>
                      </div>
                      <p className="shrink-0 text-sm font-medium text-sage">{v.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_-28px_rgba(27,68,80,0.45)] lg:mt-10">
              <div className="relative h-44">
                <Image
                  src="/pets-cat-orange.jpg"
                  alt="Gato"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-sage">
                  Gatos
                </h3>
                <ul className="mt-4 divide-y divide-line">
                  {catVaccines.map((v) => (
                    <li key={v.name} className="flex items-start justify-between gap-4 py-4 first:pt-0">
                      <div>
                        <p className="font-medium text-forest">{v.name}</p>
                        <p className="mt-1 text-sm text-muted">{v.detail}</p>
                      </div>
                      <p className="shrink-0 text-sm font-medium text-sage">{v.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="matilde" className="scroll-mt-24 border-y border-line bg-card px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="/pets-dog-smile.jpg"
                alt="Perro en un entorno familiar"
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-xl shadow-md">
              <Image
                src="/pets-puppy.jpg"
                alt="Perro feliz"
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              Por qué a domicilio
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              En casa ahorras el traslado y la espera. Encaja si trabajas, si
              tienes más de una mascota o si te cuesta coordinar una hora en
              clínica. Tu animal se atiende en su entorno, más calmado. Cirugía,
              internación o imágenes no se hacen en domicilio. Si es una
              urgencia grave, ve al servicio de urgencia más cercano.
            </p>
          </div>
        </div>
      </section>

      <section id="zona" className="grain scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              Cómo se agenda
            </h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm text-card">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-medium text-forest">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              Cobertura
            </h2>
            <p className="mt-3 text-sm text-muted">
              El desplazamiento varía según comuna. Se confirma al agendar.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {coverage.map((comuna) => (
                <li
                  key={comuna}
                  className="rounded-lg border border-line bg-card px-4 py-3 text-sm text-forest shadow-sm"
                >
                  {comuna}
                </li>
              ))}
            </ul>
            <div className="relative z-0 mt-6 overflow-hidden rounded-xl border border-line bg-card shadow-[0_12px_30px_-22px_rgba(27,68,80,0.4)]">
              <iframe
                title={coverageMap.title}
                src={coverageMap.embedSrc}
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="border-t border-line px-4 py-2.5 text-xs text-muted">
                Gran Concepción. El desplazamiento se confirma al agendar.{" "}
                <a
                  href={coverageMap.openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:underline"
                >
                  Abrir en Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="scroll-mt-24 border-t border-line bg-card px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-forest">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-forest">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="text-sage group-open:hidden">+</span>
                    <span className="hidden text-sage group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InstagramReels reels={reels} />

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-line bg-background shadow-[0_20px_50px_-28px_rgba(27,68,80,0.35)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-sage">
              Siguiente paso
            </p>
            <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">
              Agendar una visita
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Indica comuna, especie y motivo. Te confirmo disponibilidad y el valor
              de esa atención.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit rounded-md bg-clay px-5 py-3 text-sm font-medium text-white hover:brightness-110"
            >
              WhatsApp · {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm text-sage hover:underline"
            >
              <Icon name="instagram" className="h-4 w-4" />
              @{site.instagram}
            </a>
          </div>
          <div className="grid grid-cols-2">
            <Image
              src="/pets-dogs.jpg"
              alt="Perros al aire libre"
              width={700}
              height={700}
              className="h-full min-h-[220px] w-full object-cover"
            />
            <Image
              src="/pets-cat.jpg"
              alt="Gato en casa"
              width={700}
              height={700}
              className="h-full min-h-[220px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
