import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  rotulo: string; // texto mostrado enquanto não houver imagem
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Mostra a imagem quando "src" estiver preenchido em lib/config.ts;
// caso contrário, mostra um espaço reservado tracejado.
export default function Foto({ src, alt, rotulo, className = "", priority, sizes = "(max-width: 768px) 100vw, 50vw" }: Props) {
  return (
    <div className={`foto ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        <span className="foto-vazia">[{rotulo}]</span>
      )}
    </div>
  );
}
