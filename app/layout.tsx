import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: "Botanique Residence | Josué Oliveira, especialista no condomínio",
  description:
    "Lançamento no Coxipó, Cuiabá: condomínio fechado com lotes de 250 a 347 m², lago natural e lazer estilo resort. Atendimento com Josué Oliveira, CRECI/MT F-12860.",
};

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID; // Google Analytics (G-XXXXXXX)
const TAG_ID = GA4_ID || GADS_ID;
const configs = [GA4_ID, GADS_ID].filter(Boolean).map((id) => `gtag('config','${id}');`).join("");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        {children}

        {PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}

        {TAG_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`} strategy="afterInteractive" />
            <Script id="google-tag" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${configs}`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
