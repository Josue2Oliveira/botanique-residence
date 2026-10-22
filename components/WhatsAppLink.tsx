"use client";

import { linkWhatsApp } from "@/lib/config";
import { registrarLead } from "./track";

export function IconeChat({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}

export default function WhatsAppLink({ className, children, ariaLabel }: { className: string; children: React.ReactNode; ariaLabel?: string }) {
  return (
    <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel} onClick={registrarLead}>
      {children}
    </a>
  );
}
