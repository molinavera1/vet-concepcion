import { WhatsappGlyph } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-white shadow-lg shadow-forest/20 transition hover:scale-105 hover:brightness-110"
      aria-label="Agendar por WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-whatsapp" />
      <WhatsappGlyph className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
