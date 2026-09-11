export const site = {
  name: "Matilde Vet",
  veterinarian: "Matilde Camposano Schuck",
  degree: "Médico veterinario",
  university: "Universidad Austral de Chile",
  diploma:
    "Diplomado en Medicina Interna, UST (agosto 2026 – enero 2027)",
  city: "Concepción",
  tagline:
    "Atención veterinaria a domicilio en el Gran Concepción. Consulta, vacunas, toma de muestras, desparasitación y microchip.",
  phoneDisplay: "+56 9 4494 8530",
  phoneE164: "56944948530",
  hours: "Lunes a domingo · coordinamos el horario",
  instagram: "matilde.veterinaria",
  instagramUrl: "https://www.instagram.com/matilde.veterinaria/",
  linkedinUrl:
    "https://www.linkedin.com/in/matilde-camposano-schuck-29908b2b6/",
  pricingNote:
    "Valores de ejemplo. El desplazamiento está incluido. Con tres o más mascotas se conversa el valor. El detalle se confirma por WhatsApp según peso y producto.",
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hola Matilde, me gustaría agendar una visita veterinaria a domicilio en Concepción.";
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;
}

export const extraPets = {
  title: "Tres o más mascotas",
  price: "A conversar",
  description:
    "En la misma visita se acuerda el valor por WhatsApp.",
} as const;

export const consultPricing = [
  {
    name: "Consulta general",
    total: "$28.000",
    note: "Revisión en casa. Incluye el desplazamiento.",
  },
  {
    name: "Consulta segundo paciente",
    total: "$14.000",
    note: "Otro animal en la misma visita.",
  },
] as const;

export const addOnPricing = [
  {
    name: "Vacuna triple o séxtuple",
    addOn: "+$7.000",
    total: "$35.000",
  },
  {
    name: "Vacuna KC o Intra-Trac",
    addOn: "+$10.000",
    total: "$38.000",
  },
  {
    name: "Vacuna antirrábica",
    addOn: "+$4.000",
    total: "$32.000",
  },
  {
    name: "Microchip",
    addOn: "+$8.000",
    total: "$36.000",
  },
  {
    name: "Desparasitación",
    addOn: "desde +$2.500",
    total: "desde $30.500",
    note: "Según peso y producto.",
  },
  {
    name: "Toma de muestra",
    addOn: "+$5.000",
    total: "$33.000",
    note: "No incluye el precio de los exámenes de laboratorio.",
  },
] as const;

export const services = [
  {
    id: "consulta",
    title: "Consulta general",
    price: "",
    icon: "stethoscope",
    description: "",
  },
  {
    id: "vacunas",
    title: "Vacunas",
    price: "",
    icon: "syringe",
    description:
      "Perros: séxtuple, KC o Intra-Trac y antirrábica. Gatos: triple felina, antirrábica y leucemia felina.",
  },
  {
    id: "desparasitacion",
    title: "Desparasitación",
    price: "",
    icon: "shield",
    description:
      "Interna y/o externa. El valor varía según el producto y el peso del paciente.",
  },
  {
    id: "muestras",
    title: "Toma de muestras",
    price: "",
    icon: "flask",
    description:
      "Sangre, orina u otras muestras en casa. No incluye el precio de los exámenes de laboratorio.",
  },
  {
    id: "microchip",
    title: "Microchip",
    price: "",
    icon: "chip",
    description:
      "Identificación permanente bajo la piel. Permite reconocer a la mascota si se pierde y es un requisito en varios trámites.",
  },
] as const;

export const consultaIncludes = [
  "Traslado",
  "Evaluación del estado general del paciente",
  "Examen físico completo",
  "Orientación nutricional",
  "Recomendaciones generales",
  "Solicitud de exámenes complementarios, de ser necesario",
  "Seguimiento y derivación a un especialista, si corresponde",
  "Corte de uñas, de ser necesario",
] as const;

export const dogVaccines = [
  {
    name: "Séxtuple",
    detail:
      "Cubre enfermedades frecuentes del perro, como moquillo y parvovirus (el laboratorio indica el detalle).",
  },
  {
    name: "KC / Intra-Trac",
    detail:
      "Tos de las perreras. Se recomienda si hay contacto con otros perros, pensión o peluquería.",
  },
  {
    name: "Antirrábica",
    detail: "Vacuna contra la rabia. Sirve para el calendario anual, viajes y trámites.",
  },
] as const;

export const catVaccines = [
  {
    name: "Triple felina",
    detail:
      "Protege contra panleucopenia, calicivirus y rinotraqueítis, las enfermedades respiratorias y sistémicas más frecuentes en gatos.",
  },
  {
    name: "Antirrábica",
    detail:
      "Vacuna contra la rabia. También se indica en gatos que viven en departamento.",
  },
  {
    name: "Leucemia felina",
    detail:
      "FeLV. Se recomienda si hay acceso al exterior o contacto con otros gatos.",
  },
] as const;

export const coverageMap = {
  title: "Mapa de Concepción",
  embedSrc:
    "https://www.google.com/maps?ll=-36.827,-73.05&z=11&hl=es&output=embed",
  openUrl: "https://www.google.com/maps/@-36.827,-73.05,11z",
} as const;

export const coverage = [
  "Concepción",
  "Talcahuano",
  "San Pedro de la Paz",
  "Chiguayante",
  "Hualpén",
  "Penco",
] as const;

export const steps = [
  {
    n: "1",
    title: "Escribe por WhatsApp",
    description:
      "Comuna, especie, edad y motivo. Confirmamos horario, prestaciones y el arancel de esa visita.",
  },
  {
    n: "2",
    title: "Visita en tu casa",
    description:
      "Llego con maletín. En una misma visita se puede vacunar, desparasitar y colocar el microchip, si corresponde.",
  },
  {
    n: "3",
    title: "Indicaciones",
    description:
      "Qué se hizo, qué sigue y si el caso debe continuar en un recinto veterinario.",
  },
] as const;

export const faqs = [
  {
    q: "¿Quién atiende?",
    a: "Matilde Camposano Schuck, médico veterinario de la Universidad Austral de Chile. Diplomado en Medicina Interna, UST (agosto 2026 – enero 2027). Atiende a domicilio en el Gran Concepción.",
  },
  {
    q: "¿Qué vacunas aplicas?",
    a: "En perros: séxtuple, KC o Intra-Trac y antirrábica. En gatos: triple felina, antirrábica y leucemia felina. El esquema depende de edad, historial y estilo de vida.",
  },
  {
    q: "¿Los precios de la web son definitivos?",
    a: "Son valores de ejemplo y ya incluyen el desplazamiento. Consulta general $28.000; segundo paciente $14.000. Con tres o más mascotas se conversa. Vacunas, muestras, chip y desparasitación se suman. El laboratorio de las muestras va aparte.",
  },
  {
    q: "¿En qué comunas atiendes?",
    a: "Concepción, Talcahuano, San Pedro de la Paz, Chiguayante, Hualpén y Penco. Si estás un poco más lejos, escríbeme y vemos si el traslado es posible ese día.",
  },
  {
    q: "¿Las muestras se procesan en la visita?",
    a: "Las tomo en casa y se envían a laboratorio. Los resultados te los comunico cuando llegan.",
  },
  {
    q: "¿Atiendes urgencias?",
    a: "Consultas y situaciones leves a moderadas en domicilio. Si hay riesgo vital, no esperes una visita: ve al servicio de urgencia veterinaria más cercano. No indico un recinto por comuna (por ejemplo Hualpén o Talcahuano): esa información la confirma cada clínica.",
  },
] as const;
