// Dispara eventos de conversão no Meta Pixel e no Google Ads (se configurados).
type W = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function registrarLead() {
  if (typeof window === "undefined") return;
  const w = window as W;
  w.fbq?.("track", "Lead");
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSAO; // ex.: AW-123456789/AbCdEf
  if (sendTo) w.gtag?.("event", "conversion", { send_to: sendTo });
}
