"use client";

import { useState } from "react";
import { corretor, linkWhatsApp } from "@/lib/config";
import { registrarLead } from "./track";

// Lê de onde a pessoa veio (parâmetros que o Meta e o Google colocam no link do anúncio)
function origemDoAnuncio() {
  const q = new URLSearchParams(window.location.search);
  const origem =
    q.get("utm_source") || (q.get("gclid") ? "google" : q.get("fbclid") ? "meta" : document.referrer ? new URL(document.referrer).hostname : "direto");
  return {
    origem,
    campanha: q.get("utm_campaign") ?? "",
    anuncio: q.get("utm_content") ?? "",
    clique: q.get("gclid") ? "gclid" : q.get("fbclid") ? "fbclid" : "",
    pagina: window.location.href,
  };
}

// 1) Salva o lead na planilha  2) Abre o WhatsApp do corretor com a mensagem pronta
export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [interesse, setInteresse] = useState<"Morar" | "Investir">("Morar");
  const [empresa, setEmpresa] = useState(""); // armadilha anti-robô (fica escondido)
  const [enviado, setEnviado] = useState(false);

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    // grava na planilha em segundo plano (keepalive: continua mesmo se a pessoa sair da página)
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, interesse, empresa, ...origemDoAnuncio() }),
      keepalive: true,
    }).catch(() => {});

    registrarLead("formulario");

    const msg =
      `${corretor.mensagemPadrao}\n\n` +
      `Nome: ${nome}\n` +
      `WhatsApp: ${telefone}\n` +
      `Interesse: ${interesse}`;
    window.open(linkWhatsApp(msg), "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <form id="contato" className="form-card" onSubmit={enviar}>
      <h2>Receba plantas, imagens e condições de lançamento</h2>
      <p className="form-sub">Atendimento personalizado direto comigo, sem compromisso.</p>

      <label>
        Nome
        <input type="text" required autoComplete="name" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <label>
        WhatsApp
        <input type="tel" required autoComplete="tel" inputMode="tel" minLength={10} placeholder="(65) 9 0000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </label>

      <label className="armadilha" aria-hidden="true">
        Empresa
        <input type="text" tabIndex={-1} autoComplete="off" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      </label>

      <fieldset>
        <legend>Seu interesse</legend>
        <div className="pills">
          {(["Morar", "Investir"] as const).map((op) => (
            <button key={op} type="button" className={interesse === op ? "pill ativo" : "pill"} aria-pressed={interesse === op} onClick={() => setInteresse(op)}>
              {op}
            </button>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="btn btn-verde btn-grande">Quero receber as informações</button>
      {enviado && (
        <p className="form-ok" role="status">
          Recebi seus dados! Se o WhatsApp não abriu, é só me chamar no {corretor.whatsappExibicao}.
        </p>
      )}
      <p className="form-lgpd">
        Ao enviar, você autoriza o contato de {corretor.nome} por WhatsApp, telefone ou e-mail. Seus dados não são compartilhados.
      </p>
    </form>
  );
}
