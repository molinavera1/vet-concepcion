import Image from "next/image";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { InstagramReels } from "@/components/instagram-reels";
import { Icon, Paw } from "@/components/icons";
import { getLatestReels } from "@/lib/instagram";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import {
  catVaccines,
  coverage,
  coverageMap,
  dogVaccines,
  extraPets,
  faqs,
  services,
  site,
  steps,
  addOnPricing,
  consultPricing,
  whatsappUrl,
} from "@/lib/site";

export default async function Home() {
  const reels = await getLatestReels();

  return (
    <main id="inicio" className="flex-1">
      <section className="relative overflow-hidden bg-[#0c2423]">
        <HeroBackdrop />
        <div className="relative mx-auto flex min-h-[34rem] w-full max-w-6xl flex-col justify-end px-5 pb-24 pt-16 sm:min-h-[42rem] sm:px-8 sm:pb-28 lg:min-h-[48rem]">
          <div className="max-w-2xl">
            <p className="animate-fade-up inline-flex rounded-full border border-card/25 bg-card/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-card/90 backdrop-blur-sm">
              Veterinaria a domicilio · Gran {site.city}
            </p>
            <h1 className="animate-fade-up-delay mt-5 font-serif text-5xl leading-[1.05] text-card sm:text-6xl lg:text-7xl">
              Atención clínica en la casa de tu mascota
            </h1>
            <p className="animate-fade-up-2 mt-5 max-w-lg text-base leading-relaxed text-card/80 sm:text-lg">
              Consulta, vacunas, muestras y microchip, sin el estrés del
              traslado.
            </p>
          </div>
          <div className="mt-8 max-w-xl animate-fade-up-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-clay px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:brightness-110"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-full border border-card/40 bg-card/10 px-6 py-3.5 text-sm font-medium text-card backdrop-blur-sm transition hover:bg-card/20"
              >
                Ver aranceles
              </a>
            </div>
            <p className="mt-5 text-sm text-card/75">{site.hours}</p>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 sm:-mt-20 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-card p-6 shadow-[0_28px_60px_-28px_rgba(19,72,71,0.55)] sm:flex-row sm:gap-8 sm:p-8">
          <div className="w-full max-w-[168px] shrink-0 animate-float-soft sm:max-w-[196px]">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_50px_-24px_rgba(19,72,71,0.55)] ring-4 ring-background">
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
            <p className="font-serif text-3xl text-forest">{site.veterinarian}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {site.degree} de la {site.university}. Consultas, vacunas,
              muestras, desparasitación y microchip.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4 sm:justify-start">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-8 items-center justify-center text-forest transition duration-200 hover:scale-110 hover:text-sage"
              >
                <Icon name="instagram" className="h-7 w-7" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-8 items-center justify-center text-forest transition duration-200 hover:scale-110 hover:text-sage"
              >
                <Icon name="whatsapp" className="h-7 w-7" />
              </a>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-8 items-center justify-center text-forest transition duration-200 hover:scale-110 hover:text-sage"
              >
                <Icon name="linkedin" className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-3 px-5 pb-6 text-sm text-forest sm:grid-cols-3 sm:px-8">
        <Reveal delay={0}>
        <p className="flex items-start gap-3 rounded-3xl border border-line bg-card/80 px-4 py-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.6rem_1.1rem_1.7rem_1.2rem] bg-clay/12 text-clay">
            <Icon name="home" className="h-8 w-8" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.14em] text-muted">
              En tu casa
            </span>
            Perros y gatos, sin sala de espera
          </span>
        </p>
        </Reveal>
        <Reveal delay={90}>
        <p className="flex items-start gap-3 rounded-3xl border border-line bg-card/80 px-4 py-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem_1.7rem_1.1rem_1.6rem] bg-sage/12 text-sage">
            <Icon name="school" className="h-8 w-8" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.14em] text-muted">
              Formación
            </span>
            {site.university}
          </span>
        </p>
        </Reveal>
        <Reveal delay={180}>
        <p className="flex items-start gap-3 rounded-3xl border border-line bg-card/80 px-4 py-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.5rem_1.3rem_1.8rem_1.1rem] bg-forest/10 text-forest">
            <Icon name="plus" className="h-8 w-8" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.14em] text-muted">
              Urgencias
            </span>
            Si hay riesgo vital, el lugar adecuado es un servicio de urgencia
            cercano.
          </span>
        </p>
        </Reveal>
      </div>

      <section id="servicios" className="scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-clay">
              <Paw className="h-4 w-4" />
              Cómo se arma una visita
            </p>
            <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">
              Prestaciones
            </h2>
            <p className="mt-3 text-muted">
              La visita parte con la consulta general. Después puedes agregar
              vacunas, desparasitación, muestras o microchip, si corresponde.
              Cirugía, internación o radiografías no se hacen en casa.
            </p>
          </div>
          <div className="mt-10">
            {services
              .filter((service) => service.id === "consulta")
              .map((service) => (
                <Reveal key={service.id}>
                  <article className="rounded-3xl bg-forest p-7 text-card shadow-[0_24px_50px_-24px_rgba(19,72,71,0.65)] md:flex md:items-start md:justify-between md:gap-8">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.7rem_1.2rem_1.8rem_1.3rem] bg-card/15 text-card">
                        <Icon name={service.icon} className="h-9 w-9" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-card/75">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 shrink-0 font-serif text-3xl text-card md:mt-0">
                      {service.price}
                    </p>
                  </article>
                </Reveal>
              ))}
            <p className="mt-12 font-serif text-2xl text-forest">
              Servicios que puedes agregar a tu consulta general
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              No reemplazan la consulta: se suman a los $28.000. El
              desplazamiento ya está incluido.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.id !== "consulta")
                .map((service, i) => (
                  <Reveal key={service.id} delay={i * 90} variant={i % 2 ? "right" : "left"}>
                    <article className="rounded-3xl border border-line bg-card p-6 shadow-[0_16px_36px_-24px_rgba(19,72,71,0.45)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_40px_-18px_rgba(19,72,71,0.5)]">
                      <div
                        className={`flex h-14 w-14 items-center justify-center text-sage ${
                          i === 0
                            ? "rounded-[1.8rem_1.1rem_1.5rem_1.4rem] bg-clay/12 text-clay"
                            : i === 1
                              ? "rounded-[1.2rem_1.7rem_1.2rem_1.6rem] bg-sage/12"
                              : i === 2
                                ? "rounded-[1.5rem_1.6rem_1.1rem_1.4rem] bg-forest/10 text-forest"
                                : "rounded-[1.3rem_1.8rem_1.4rem_1.2rem] bg-leaf/15"
                        }`}
                      >
                        <Icon name={service.icon} className="h-9 w-9" />
                      </div>
                      <div className="mt-4 flex items-start justify-between gap-3">
                        <h3 className="font-serif text-xl text-forest">
                          {service.title}
                        </h3>
                        <p className="shrink-0 text-sm font-medium text-sage">
                          {service.price}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="precios"
        className="scroll-mt-24 bg-card px-5 py-16 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl text-forest sm:text-5xl">
              Aranceles de referencia
            </h2>
            <p className="max-w-md text-sm text-muted">{site.pricingNote}</p>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Primero la consulta general. Lo de abajo no es en vez de esa
            consulta: se suma si lo necesitas. El desplazamiento ya está
            incluido. Con tres o más mascotas se conversa el valor.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {consultPricing.map((row, i) => (
              <Reveal key={row.name} delay={i * 100} variant={i ? "right" : "left"}>
              <article
                className="rounded-3xl border border-line bg-background px-6 py-6"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-muted">
                  {row.name}
                </p>
                <p className="mt-2 font-serif text-3xl text-forest">{row.total}</p>
                <p className="mt-2 text-sm text-muted">{row.note}</p>
              </article>
              </Reveal>
            ))}
          </div>
          <h3 className="mt-10 font-serif text-2xl text-forest">
            Servicios que puedes agregar a tu consulta general
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            El recargo se suma a los $28.000. La columna de la derecha es el
            total de esa visita.
          </p>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line shadow-[0_16px_36px_-24px_rgba(19,72,71,0.4)]">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="bg-background text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">Servicio</th>
                  <th className="px-5 py-3 font-medium">Se suma</th>
                  <th className="px-5 py-3 font-medium">Con consulta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-card">
                {addOnPricing.map((row) => (
                  <tr
                    key={row.name}
                    className="transition-colors hover:bg-background/80"
                  >
                    <td className="px-5 py-4">
                      <p className="font-medium text-forest">{row.name}</p>
                      {"note" in row && row.note ? (
                        <p className="mt-1 text-muted">{row.note}</p>
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-sage">
                      {row.addOn}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-forest">
                      {row.total}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-5 py-4">
                    <p className="font-medium text-forest">{extraPets.title}</p>
                    <p className="mt-1 text-muted">{extraPets.description}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-muted">
                    —
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-sage">
                    {extraPets.price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="vacunas" className="scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-clay">
            <Paw className="h-4 w-4" />
            Según especie
          </p>
          <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">
            Vacunas
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            El esquema se define según edad, historial y si convive o sale.
            Los valores son el recargo sobre la consulta ($28.000). El
            desplazamiento está incluido.
          </p>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <Reveal variant="left">
            <article className="group overflow-hidden rounded-3xl border border-line bg-card shadow-[0_22px_44px_-28px_rgba(19,72,71,0.5)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/pets-dogs.jpg"
                  alt="Perros"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
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
            </Reveal>
            <Reveal variant="right" delay={120}>
            <article className="group overflow-hidden rounded-3xl border border-line bg-card shadow-[0_22px_44px_-28px_rgba(19,72,71,0.5)] lg:mt-12">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/pets-cat-orange.jpg"
                  alt="Gato"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
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
            </Reveal>
          </div>
        </div>
      </section>

      <section id="matilde" className="scroll-mt-24 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <Reveal variant="left">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/pets-dog-smile.jpg"
                alt="Perro en un entorno familiar"
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            </Reveal>
            <Reveal variant="left" delay={120}>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/pets-puppy.jpg"
                alt="Perro feliz"
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            </Reveal>
          </div>
          <Reveal variant="right">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-clay">
              <Paw className="h-4 w-4" />
              En su entorno
            </p>
            <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">
              Por qué a domicilio
            </h2>
            <p className="mt-6 font-serif text-2xl leading-snug text-forest">
              Menos traslado, menos espera, un animal más calmado.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Encaja si trabajas, si tienes más de una mascota o si te cuesta
              coordinar una hora en clínica. Cirugía, internación o imágenes no
              se hacen en domicilio. Si es una urgencia grave, ve al servicio de
              urgencia más cercano.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest px-5 py-16 text-card sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-card/55">
            Tres pasos
          </p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl">Cómo se agenda</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 120}>
              <li className="relative">
                <span className="font-serif text-6xl text-card/15">
                  {String(step.n).padStart(2, "0")}
                </span>
                <p className="mt-2 font-medium">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-card/70">
                  {step.description}
                </p>
              </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="zona" className="grain scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-clay">
            Gran Concepción
          </p>
          <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">
            Cobertura
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            El desplazamiento está incluido en los aranceles.
          </p>
          <div className="mt-8">
            <Marquee items={coverage} />
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {coverage.map((comuna) => (
              <li
                key={comuna}
                className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-forest shadow-sm"
              >
                {comuna}
              </li>
            ))}
          </ul>
          <div className="relative z-0 mt-8 overflow-hidden rounded-3xl border border-line bg-card shadow-[0_16px_36px_-24px_rgba(19,72,71,0.4)]">
            <iframe
              title={coverageMap.title}
              src={coverageMap.embedSrc}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="border-t border-line px-4 py-2.5 text-xs text-muted">
              Gran Concepción. El desplazamiento está incluido.{" "}
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
      </section>

      <section id="preguntas" className="scroll-mt-24 bg-card px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl text-forest">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-forest">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="text-sage transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted motion-safe:animate-fade-up">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InstagramReels reels={reels} />

      <section className="px-5 pb-20 sm:px-8">
        <Reveal variant="scale">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-forest text-card shadow-[0_28px_60px_-28px_rgba(19,72,71,0.55)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-card/55">
              Siguiente paso
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl">
              Agendar una visita
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-card/75">
              Indica comuna, especie y motivo. Te confirmo disponibilidad y el valor
              de esa atención.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit rounded-full bg-clay px-6 py-3.5 text-sm font-medium text-white hover:brightness-110"
            >
              WhatsApp · {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm text-card/80 hover:text-card"
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
              className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105"
            />
            <Image
              src="/pets-cat.jpg"
              alt="Gato en casa"
              width={700}
              height={700}
              className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
        </Reveal>
      </section>
    </main>
  );
}
