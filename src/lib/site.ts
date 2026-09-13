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
    "El valor se conversa por WhatsApp.",
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
    addOn: "+$10.000",
    total: "$38.000",
  },
  {
    name: "Desparasitación",
    addOn: "desde +$2.500",
    total: "desde $30.500",
    note: "Según peso y producto.",
  },
  {
    name: "Toma de muestra",
    addOn: "desde +$5.000",
    total: "desde $33.000",
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
      "Es un identificador permanente, exigido por la Ley Cholito para inscribirla en el Registro Nacional de Mascotas. Si se pierde, es la forma de reconocerla.",
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
    required: false,
    detail:
      "Protege contra moquillo, parvovirus, hepatitis infecciosa, parainfluenza y leptospirosis. No es obligatoria por ley, pero es la vacuna de base del perro.",
  },
  {
    name: "KC / Intra-Trac",
    required: false,
    detail:
      "Cubre la tos de las perreras (Bordetella y, según el producto, parainfluenza). Se recomienda si hay contacto con otros perros: pensión, peluquería o paseos grupales.",
  },
  {
    name: "Antirrábica",
    required: true,
    detail:
      "Protege contra la rabia, una enfermedad mortal que también puede afectar a las personas. En Chile es obligatoria para todo perro y se acredita con certificado veterinario.",
  },
] as const;

export const catVaccines = [
  {
    name: "Triple felina",
    required: false,
    detail:
      "Protege contra panleucopenia, calicivirus y rinotraqueítis. Son las infecciones virales más frecuentes y graves en gatos. No es obligatoria por ley, pero sí esencial.",
  },
  {
    name: "Antirrábica",
    required: true,
    detail:
      "Protege contra la rabia. Es obligatoria por ley también en gatos, aunque vivan en departamento, y se acredita con certificado veterinario.",
  },
  {
    name: "Leucemia felina",
    required: false,
    detail:
      "Protege contra el virus FeLV, que se transmite por contacto cercano entre gatos. Se recomienda si sale al exterior o convive con otros gatos.",
  },
] as const;

export const patients = [
  {
    src: "/pacientes/01.jpg",
    alt: "Dachshund descansando en el sillón de su casa",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/pacientes/03.jpg",
    alt: "Gato persa en casa",
    className: "md:row-span-2",
  },
  {
    src: "/pacientes/08.jpg",
    alt: "Gato dormido en su cama",
    className: "",
  },
  {
    src: "/pacientes/02.jpg",
    alt: "Gato en una visita de vacunación en casa",
    className: "md:row-span-2",
  },
  {
    src: "/pacientes/04.jpg",
    alt: "Dos gatos en una visita a domicilio",
    className: "md:col-span-2",
  },
  {
    src: "/pacientes/05.jpg",
    alt: "Perro senior en su casa",
    className: "",
  },
  {
    src: "/pacientes/07.jpg",
    alt: "Gata en su casa",
    className: "md:col-span-2",
  },
  {
    src: "/pacientes/06.jpg",
    alt: "Perro en el living durante la visita",
    className: "",
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
    title: "Escribes por WhatsApp",
    description:
      "Cuentas comuna, especie y motivo. Coordinamos el día y el horario.",
  },
  {
    n: "2",
    title: "Visita en tu casa",
    description:
      "Llego con los implementos para realizar el procedimiento.",
  },
  {
    n: "3",
    title: "Seguimiento",
    description:
      "Hacemos seguimiento activo de cada paciente.",
  },
] as const;

export const faqs = [
  {
    q: "¿Quién atiende?",
    a: "Matilde Camposano Schuck, médico veterinario de la Universidad Austral de Chile. Diplomado en Medicina Interna, UST (agosto 2026 – enero 2027). Atiende a domicilio en el Gran Concepción.",
  },
  {
    q: "¿Qué vacunas aplicas?",
    a: "Por ley, en Chile la única vacuna obligatoria en perros y gatos es la antirrábica. En perros también aplico séxtuple y, si hay contacto con otros perros, KC o Intra-Trac. En gatos, triple felina y leucemia felina según si sale o convive. El esquema se arma según edad e historial.",
  },
  {
    q: "¿Los precios de la web son definitivos?",
    a: "Son valores de referencia y pueden variar levemente según la cantidad de mascotas y los servicios que necesites. El detalle se confirma por WhatsApp.",
  },
  {
    q: "¿En qué comunas atiendes?",
    a: "Concepción, Talcahuano, San Pedro de la Paz, Chiguayante, Hualpén y Penco. A Chiguayante, Penco y Talcahuano hay un recargo por distancia. Si estás un poco más lejos, escríbeme y vemos si el traslado es posible ese día.",
  },
  {
    q: "¿Las muestras se procesan en la visita?",
    a: "Las tomo en casa y se envían al laboratorio. El tiempo de procesamiento varía según el examen solicitado: desde un día, o más.",
  },
  {
    q: "¿Atiendes urgencias?",
    a: "No, atiendo consultas y situaciones leves a moderadas en domicilio. Si hay riesgo vital, dirígete al servicio de urgencia veterinaria más cercano.",
  },
] as const;
