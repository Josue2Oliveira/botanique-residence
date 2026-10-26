"use client";

import { useState } from "react";

// Extrai o ID de um link do YouTube (watch, youtu.be, shorts, embed)
function idYouTube(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

// Mostra só a capa; o player do YouTube carrega quando a pessoa clica (deixa o site rápido)
export default function VideoCorretor({ url, vertical, titulo }: { url: string; vertical: boolean; titulo: string }) {
  const [tocando, setTocando] = useState(false);
  const yt = idYouTube(url);
  const classe = vertical ? "video-box vertical" : "video-box";

  if (!yt) {
    // arquivo de vídeo próprio (.mp4 em public/videos)
    return (
      <div className={classe}>
        <video src={url} controls playsInline preload="metadata" title={titulo} />
      </div>
    );
  }

  return (
    <div className={classe}>
      {tocando ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0&playsinline=1`}
          title={titulo}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-capa" onClick={() => setTocando(true)} aria-label={`Assistir: ${titulo}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${yt}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="video-play" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="video-legenda">Assista: um recado do Josué</span>
        </button>
      )}
    </div>
  );
}
