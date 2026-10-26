import Image from "next/image";
import Foto from "@/components/Foto";
import LeadForm from "@/components/LeadForm";
import WhatsAppLink, { IconeChat } from "@/components/WhatsAppLink";
import { central, corretor, empreendimento, equipamentos, imagens, lazer, proximos, referenciaLocal, video } from "@/lib/config";
import VideoCorretor from "@/components/VideoCorretor";
import AgendarVisitaLink from "@/components/AgendarVisitaLink";

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Pin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* ===== TOPO + HERO ===== */}
      <div className="topo-hero">
        {imagens.hero && (
          <>
            <Image src={imagens.hero} alt="" fill priority sizes="100vw" className="hero-bg" />
            <div className="hero-veu" aria-hidden="true" />
          </>
        )}
        <header className="container topo">
          <div className="corretor">
            <div className="avatar-anel">
              <Foto src={imagens.josueAvatar} alt={`Foto de ${corretor.nome}`} rotulo="FOTO" className="avatar" sizes="64px" priority />
            </div>
            <div className="corretor-txt">
              <span className="corretor-nome">{corretor.nome}</span>
              <span className="corretor-creci">Corretor de Imóveis · {corretor.creci}</span>
              <span className="selo">Especialista Botanique Residence</span>
            </div>
          </div>
          <a href="#contato" className="btn btn-ouro">Quero informações</a>
        </header>

        <section className="container hero">
          <div className="hero-txt">
            <span className="tag">Lançamento · Coxipó, Cuiabá</span>
            <h1>Botanique Residence: seu lote em condomínio fechado, cercado de verde.</h1>
            <p className="hero-sub">
              Um condomínio de alto padrão às margens de um lago natural, com lazer completo no estilo resort, na valorizada região do Coxipó.
            </p>
            <ul className="hero-lista">
              <li><Check />Condomínio fechado</li>
              <li><Check />Lotes de 250 a 347 m²</li>
              <li><Check />Lazer estilo resort</li>
              <li><Check />Lago natural</li>
            </ul>
          </div>
          <LeadForm />
        </section>
      </div>

      {/* ===== NÚMEROS ===== */}
      <section className="container numeros-wrap">
        <div className="numeros">
          <div><span className="num">441</span><span>Lotes residenciais em condomínio fechado</span></div>
          <div><span className="num">250–347 m²</span><span>Metragens pensadas para o seu projeto</span></div>
          <div><span className="num">17</span><span>Quadras, com lago e área de preservação</span></div>
          <div><span className="num">1,4 km</span><span>De pista de cooper em meio ao verde</span></div>
        </div>
      </section>

      {/* ===== ESPECIALISTA ===== */}
      <section className={video.url ? "container especialista com-video" : "container especialista"}>
        <div className="esp-foto-anel">
          <Foto src={imagens.josue} alt={`Foto de ${corretor.nome}`} rotulo="FOTO: Josué" className="esp-foto" sizes="(max-width: 768px) 80vw, 360px" />
        </div>
        <div className="esp-txt">
          <span className="eyebrow">Quem vai te atender</span>
          <h2>{corretor.nome}, especialista no Botanique Residence.</h2>
          <p>
            Conheço cada detalhe do condomínio: a posição dos lotes, as metragens, o projeto de lazer e as condições de lançamento.
            Meu trabalho é te ajudar a escolher o lote certo, seja para morar ou para investir, com atendimento próximo do primeiro contato até a assinatura.
          </p>
          <WhatsAppLink className="btn btn-verde"><IconeChat size={20} />Falar com o Josué</WhatsAppLink>
        </div>
        {video.url && (
          <div className="esp-video">
            <VideoCorretor url={video.url} vertical={video.vertical} titulo={`${corretor.nome} apresenta o Botanique Residence`} />
          </div>
        )}
      </section>

      {/* ===== SOBRE ===== */}
      <section className="container duas-col">
        <Foto src={imagens.lago} alt="Lago com píer e área de lazer do Botanique Residence" rotulo="FOTO: lago" className="foto-4x3 arredondada" />
        <div className="col-txt">
          <span className="eyebrow">O empreendimento</span>
          <h2>Natureza, sossego e conforto no mesmo endereço.</h2>
          <p>
            O Botanique Residence foi planejado ao redor de um lago natural, com muito verde e espaços que convidam a desacelerar. É a escolha de quem quer construir a casa dos sonhos com tranquilidade, sem abrir mão de estar perto de tudo o que Cuiabá oferece.
          </p>
          <p>Para quem pensa em investir, é um lançamento em condomínio fechado de alto padrão, em uma das regiões que mais se valorizam na cidade.</p>
          <a href="#contato" className="btn btn-verde">Quero conhecer o projeto</a>
        </div>
      </section>

      {/* ===== LAZER ===== */}
      <section className="grad-claro">
        <div className="container secao">
          <div className="secao-cab">
            <span className="eyebrow">Lazer completo</span>
            <h2>Lazer de resort para fazer parte da sua rotina.</h2>
            <p>São 26 itens de lazer, e as áreas sociais são entregues equipadas, mobiliadas, decoradas e climatizadas. É só se mudar e aproveitar.</p>
          </div>
          <div className="grid-lazer">
            {lazer.map((item) => (
              <article key={item.nome} className="card-lazer">
                <Foto src={item.foto} alt={item.nome} rotulo={`FOTO: ${item.nome}`} className="foto-4x3" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="card-txt">
                  <h3>{item.nome}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="equip">
            <h3>E ainda:</h3>
            <ul>
              {equipamentos.map((e) => (
                <li key={e}><Check />{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section className="container duas-col">
        <div className="col-txt">
          <span className="eyebrow">Localização</span>
          <h2>No Coxipó, perto do que importa no seu dia a dia.</h2>
          <p className="referencia"><Pin />{referenciaLocal}</p>
          <p>Acesso rápido aos principais eixos da cidade, com comércio e serviços a poucos minutos.</p>
          <ul className="lista-proximos compacta">
            {proximos.map((p) => (
              <li key={p}><Pin />{p}</li>
            ))}
          </ul>
        </div>
        <div className="mapa-box">
          <iframe
            title="Localização do Botanique Residence no mapa"
            src={`https://maps.google.com/maps?q=${empreendimento.lat},${empreendimento.lng}&z=15&hl=pt-BR&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="mapa-rodape">
            <span><Pin />Botanique Residence · Coxipó, Cuiabá/MT</span>
            <a href={`https://www.google.com/maps?q=${empreendimento.lat},${empreendimento.lng}`} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
          </div>
        </div>
      </section>

      {/* ===== CENTRAL DE VENDAS ===== */}
      <section className="grad-claro">
        <div className="container duas-col central">
          <Foto src={imagens.central} alt="Central de vendas do Botanique Residence ao entardecer" rotulo="FOTO: Central de vendas" className="foto-16x9 arredondada" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="col-txt">
            <span className="eyebrow">Central Botanique Residence</span>
            <h2>Conheça a maquete com atendimento exclusivo.</h2>
            <p>
              A Central de Vendas fica em uma via movimentada e de fácil acesso, {central.local.charAt(0).toLowerCase() + central.local.slice(1)}. Lá você vê a maquete completa do condomínio e entende a posição de cada lote, do lago e das áreas de lazer.
            </p>
            {central.enderecoCompleto && <p className="referencia"><Pin />{central.enderecoCompleto}</p>}
            <div className="aviso-visita" role="note">
              <strong>Vai visitar a Central? Agende comigo.</strong>
              <span>
                Assim eu reservo um horário e te recebo pessoalmente. Se for direto, informe na recepção que você é atendido pelo corretor <b>{corretor.nome}</b>, para garantir a continuidade do seu atendimento.
              </span>
            </div>
            <AgendarVisitaLink className="btn btn-verde btn-grande"><IconeChat size={20} />Agendar minha visita com o Josué</AgendarVisitaLink>
          </div>
        </div>
      </section>

      {/* ===== IMPLANTAÇÃO ===== */}
      <section className="grad-verde">
        <div className="container secao">
          <div className="secao-cab claro">
            <span className="eyebrow ouro">Implantação e plantas</span>
            <h2>Um projeto que integra arquitetura e natureza.</h2>
            <p>Veja como os lotes, o lago e as áreas de lazer se distribuem no condomínio.</p>
          </div>
          <div className="implantacao">
            <Foto src={imagens.implantacao} alt="Mapa de implantação com legenda dos 31 equipamentos" rotulo="MAPA DE IMPLANTAÇÃO" className="foto-16x9 arredondada claro-bg" sizes="(max-width: 1240px) 100vw, 1200px" />
            <Foto src={imagens.setores} alt="Setores do condomínio: portaria, clube, esportes e áreas verdes" rotulo="SETORES" className="foto-16x9 arredondada claro-bg" sizes="(max-width: 1240px) 100vw, 1200px" />
          </div>
          <div className="autores">
            <div><span>Projeto arquitetônico</span><strong>Jhonny Rother</strong></div>
            <div><span>Projeto de interiores</span><strong>Eduardo de Assis Garcia</strong></div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="container secao">
        <div className="cta-final">
          <div>
            <h2>Garanta acesso antecipado ao lançamento.</h2>
            <p>Fale comigo agora e receba plantas, imagens e as condições para escolher o seu lote.</p>
          </div>
          <WhatsAppLink className="btn btn-escuro btn-grande"><IconeChat />Chamar no WhatsApp</WhatsAppLink>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="rodape">
        <div className="container rodape-int">
          <div className="rodape-topo">
            <div className="corretor-txt">
              <span className="corretor-nome">{corretor.nome}</span>
              <span>Corretor de Imóveis · {corretor.creci} · Especialista Botanique Residence</span>
            </div>
            <span>WhatsApp: {corretor.whatsappExibicao}</span>
          </div>
          <p>
            Página independente do corretor {corretor.nome}, criada para divulgação do empreendimento. Não é o site oficial da incorporadora. Imagens e perspectivas meramente ilustrativas.
          </p>
          <p>
            Condomínio Residencial Botanique Cuiabá: projeto aprovado pela Prefeitura Municipal de Cuiabá/MT sob o nº 04/2025, em 02/12/2025; Alvará de Obras nº 218/2025, expedido em 18/09/2025; registrado na matrícula nº 127.255 do 5º Serviço Notarial e Registro de Imóveis da 2ª Circunscrição Imobiliária de Cuiabá/MT, sob o nº R.1/127.255.
          </p>
        </div>
      </footer>

      {/* ===== WHATSAPP FLUTUANTE ===== */}
      <WhatsAppLink className="wpp-flutuante" ariaLabel={`Falar com ${corretor.nome} no WhatsApp`}>
        <IconeChat size={24} />
        <span>WhatsApp</span>
      </WhatsAppLink>
    </main>
  );
}
