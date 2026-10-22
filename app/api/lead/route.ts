import { NextResponse } from "next/server";

// Recebe o lead do formulário e grava na planilha do Google (via Apps Script).
// Configure na Vercel: SHEETS_WEBHOOK_URL e SHEETS_TOKEN.

const limpa = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return NextResponse.json({ ok: false, erro: "planilha não configurada" }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // campo escondido anti-robô: pessoas não preenchem
  if (limpa(body.empresa)) return NextResponse.json({ ok: true });

  const nome = limpa(body.nome, 120);
  const telefone = limpa(body.telefone, 40);
  if (!nome || telefone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, erro: "dados inválidos" }, { status: 400 });
  }

  const lead = {
    token: process.env.SHEETS_TOKEN ?? "",
    nome,
    telefone,
    interesse: limpa(body.interesse, 20),
    origem: limpa(body.origem, 60),
    campanha: limpa(body.campanha, 120),
    anuncio: limpa(body.anuncio, 120),
    clique: limpa(body.clique, 30),
    pagina: limpa(body.pagina, 300),
  };

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(lead),
      redirect: "follow",
      cache: "no-store",
    });
    return NextResponse.json({ ok: r.ok });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
