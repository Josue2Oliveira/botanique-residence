// =====================================================================
//  CONFIGURAÇÃO DA PÁGINA — edite aqui seus dados e suas imagens
// =====================================================================

export const corretor = {
  nome: "Josué Oliveira",
  creci: "CRECI/MT F-12860",
  whatsapp: "5565999610968", // DDI + DDD + número, só dígitos
  whatsappExibicao: "(65) 99961-0968",
  mensagemPadrao: "Vim do seu site, quero mais informações desse condomínio.",
};

export function linkWhatsApp(mensagem: string = corretor.mensagemPadrao) {
  return `https://wa.me/${corretor.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// ---------------------------------------------------------------------
//  IMAGENS
//  1. Coloque o arquivo na pasta  public/images/
//     ex.: public/images/josue.jpg
//  2. Escreva o caminho aqui SEM a palavra "public":
//     josue: "/images/josue.jpg"
//  Enquanto estiver null, a página mostra um espaço reservado.
// ---------------------------------------------------------------------

export const imagens = {
  josue: "/images/josue.webp" as string | null,
  josueAvatar: "/images/josue-avatar.webp" as string | null, // recorte do rosto para o círculo do topo
  hero: "/images/lago-aereo.webp" as string | null,
  lago: "/images/lago-clube.webp" as string | null,
  mapa: null as string | null, //   opcional: mapa de localização
  implantacao: "/images/implantacao-mapa.webp" as string | null,
  setores: "/images/implantacao-setores.webp" as string | null,
  central: "/images/central.webp" as string | null,
};

// ---------------------------------------------------------------------
//  VÍDEO DO CORRETOR
//  Cole o link do YouTube (normal ou Shorts), ex.:
//    "https://youtube.com/shorts/AbCdEfGhIjK"  ou  "https://www.youtube.com/watch?v=AbCdEfGhIjK"
//  Ou um arquivo .mp4 colocado em public/videos/, ex.: "/videos/josue.mp4"
//  Enquanto estiver null, a seção do vídeo não aparece.
// ---------------------------------------------------------------------
export const video = {
  url: "https://youtube.com/shorts/OWXh3fftmfc" as string | null,
  vertical: true, // true = gravado em pé (celular); false = deitado
};

// Localização do empreendimento no mapa
export const empreendimento = {
  lat: -15.626463253928964,
  lng: -56.023955531800645,
};

// Central de vendas (plantão)
export const central = {
  local: "Na rotatória da Estrada do Moinho com o Recanto dos Pássaros",
  // Deixe null para NÃO mostrar o número no site (o endereço exato vai pelo WhatsApp ao agendar).
  // Para mostrar, troque por: "Av. Rui Barbosa, nº 11, Recanto dos Pássaros, Cuiabá/MT"
  enderecoCompleto: null as string | null,
  mensagemAgendar: "Olá Josué! Vim do seu site e quero agendar uma visita à Central de Vendas do Botanique Residence.",
};

export const lazer: { nome: string; desc: string; foto: string | null }[] = [
  { nome: "Prainha no lago", desc: "Espreguiçadeiras na areia, à beira do lago natural.", foto: "/images/prainha.webp" },
  { nome: "Piscina", desc: "Piscina ampla cercada de palmeiras, com vista para o lago.", foto: "/images/piscina.webp" },
  { nome: "Pool bar", desc: "Bar ao lado da piscina para curtir o fim de semana.", foto: "/images/pool-bar.webp" },
  { nome: "Deck da piscina", desc: "Mesas e ombrelones para reunir a família ao ar livre.", foto: "/images/piscina-deck.webp" },
  { nome: "Espaço wellness", desc: "Ambiente de relaxamento com hidromassagem.", foto: "/images/wellness.webp" },
  { nome: "Salão de festas", desc: "Espaço climatizado para eventos e comemorações.", foto: "/images/salao-festas.webp" },
  { nome: "Churrasqueira", desc: "Área gourmet equipada, junto às quadras.", foto: "/images/churrasqueira.webp" },
  { nome: "Academia", desc: "Treine perto de casa, sem trânsito.", foto: "/images/academia.webp" },
  { nome: "Quadra de tênis", desc: "Quadra de saibro em meio ao verde.", foto: "/images/quadra-tenis.webp" },
  { nome: "Redário", desc: "Redes sob o pergolado, de frente para o lago.", foto: "/images/redario.webp" },
  { nome: "Píer", desc: "Deck de madeira sobre o lago para contemplar o pôr do sol.", foto: "/images/pier.webp" },
  { nome: "Portaria social", desc: "Acesso controlado com portaria social e de serviço.", foto: "/images/portaria.webp" },
];

// Demais itens do projeto (do mapa de implantação)
export const equipamentos = [
  "Pista de cooper de 1,4 km",
  "Campo de futebol",
  "Quadra poliesportiva",
  "Quadras de areia",
  "Espaço gourmet",
  "2 churrasqueiras",
  "2 playgrounds",
  "Pet place",
  "Pomar",
  "Mirante",
  "Área de piquenique",
  "Praça para food truck",
  "Espaço para eventos",
  "Estar com pergolado",
  "Estar contemplativo",
  "Smart conveniência",
  "Bicicletário",
  "Deck",
];

export const referenciaLocal = "Atrás da Associação Médica, na Estrada do Moinho.";

export const proximos = ["UFMT", "Shopping 3 Américas", "Parque Tia Nair", "Supermercado BigLar"];
