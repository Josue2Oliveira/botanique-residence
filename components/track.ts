// Dispara eventos de conversão no Meta Pixel, Google Ads e Google Analytics (se configurados).
type W = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function registrarLead(origem: "formulario" | "whatsapp" | "agendar_visita" = "whatsapp") {
  if (typeof window === "undefined") return;
  const w = window as W;
  w.fbq?.("track", "Lead");
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSAO; // ex.: AW-123456789/AbCdEf
  if (sendTo) w.gtag?.("event", "conversion", { send_to: sendTo });
  // Google Analytics: evento recomendado de lead (aparece em Relatórios › Engajamento › Eventos)
  if (process.env.NEXT_PUBLIC_GA4_ID) w.gtag?.("event", "generate_lead", { lead_source: origem });
}
