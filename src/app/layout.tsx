import { Source_Serif_4, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { site, coverage } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-src",
  subsets: ["latin"],
});

export const metadata = {
  title: `${site.name} · Veterinaria a domicilio en ${site.city}`,
  description: `${site.veterinarian}, ${site.degree} de la ${site.university}. ${site.tagline}`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  description: site.tagline,
  telephone: `+${site.phoneE164}`,
  image: "/matilde.jpg",
  areaServed: coverage.map((name) => ({
    "@type": "City",
    name,
  })),
  openingHours: "Mo-Su",
  priceRange: "$$",
  sameAs: [site.instagramUrl, site.linkedinUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
