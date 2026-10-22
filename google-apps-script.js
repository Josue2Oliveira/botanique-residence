// =====================================================================
//  COLE ESTE CÓDIGO NA SUA PLANILHA:  Extensões > Apps Script
//  Troque o TOKEN abaixo por uma senha sua (a mesma vai na Vercel em SHEETS_TOKEN)
// =====================================================================

const TOKEN = "botaniqueresidencejosuecorretor";

const CABECALHO = ["Data/hora", "Nome", "WhatsApp", "Interesse", "Origem", "Campanha", "Anúncio", "Clique", "Página"];

function doPost(e) {
  const dados = JSON.parse(e.postData.contents);
  if (dados.token !== TOKEN) return resposta({ ok: false });

  const aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (aba.getLastRow() === 0) {
    aba.appendRow(CABECALHO);
    aba.getRange(1, 1, 1, CABECALHO.length).setFontWeight("bold");
    aba.setFrozenRows(1);
  }

  // evita que um texto começando com = + - @ vire fórmula na planilha
  const seguro = (v) => {
    const s = String(v || "");
    return /^[=+\-@]/.test(s) ? "'" + s : s;
  };

  aba.appendRow([
    new Date(),
    seguro(dados.nome),
    seguro(dados.telefone),
    seguro(dados.interesse),
    seguro(dados.origem),
    seguro(dados.campanha),
    seguro(dados.anuncio),
    seguro(dados.clique),
    seguro(dados.pagina),
  ]);

  return resposta({ ok: true });
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
