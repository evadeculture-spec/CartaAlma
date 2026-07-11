"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Container } from "@/components/ui/container";
import { InkRevealText } from "@/components/decor/ink-reveal-text";
import { SoftGlow } from "@/components/decor/soft-glow";
import { Reveal } from "@/components/decor/reveal";

export function BrandFilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  }

  return (
    <section className="relative overflow-hidden bg-espresso py-20 text-cream sm:py-28">
      <SoftGlow tone="gold" className="left-1/2 top-0 h-96 w-96 -translate-x-1/2 opacity-30" />
      <Container className="relative flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            O filme
          </span>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-balance-pretty sm:text-4xl">
            <InkRevealText text="Uma carta que atravessa gerações." as="span" />
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            Do gesto de escrever ao momento de receber — o kit Carta Alma em movimento.
          </p>
        </div>

        <Reveal className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 shadow-paper">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              src="/videos/carta-alma-brand-film.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Ativar som" : "Desativar som"}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-espresso/60 text-cream backdrop-blur-sm transition-colors hover:bg-espresso/80"
            >
              {muted ? <VolumeX size={18} aria-hidden /> : <Volume2 size={18} aria-hidden />}
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
