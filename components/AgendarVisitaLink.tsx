"use client";

import { central, linkWhatsApp } from "@/lib/config";
import { registrarLead } from "./track";

export default function AgendarVisitaLink({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={linkWhatsApp(central.mensagemAgendar)} target="_blank" rel="noopener noreferrer" className={className} onClick={registrarLead}>
      {children}
    </a>
  );
}
