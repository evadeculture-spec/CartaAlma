"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HandHeart, Heart, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LetterSheet } from "@/components/letter/letter-sheet";
import { cn } from "@/lib/utils";

interface DemoPreset {
  id: string;
  recipient: string;
  occasion: string;
  occasionIcon: typeof Heart;
  tone: string;
  paper: string;
  greeting: string;
  body: string;
  signoff: string;
  signature: string;
}

const presets: DemoPreset[] = [
  {
    id: "avo",
    recipient: "Avó",
    occasion: "Agradecimento",
    occasionIcon: HandHeart,
    tone: "Emocional",
    paper: "Papel de algodão · lacre vermelho",
    greeting: "Avó,",
    body: "Há coisas que só percebemos tarde demais — e uma delas é o quanto o teu colo me ensinou sobre paciência. Obrigada por cada tarde de domingo, por cada história repetida com o carinho da primeira vez.",
    signoff: "Com saudade de perto,",
    signature: "A tua neta",
  },
  {
    id: "parceiro",
    recipient: "O meu amor",
    occasion: "Amor",
    occasionIcon: Heart,
    tone: "Romântico",
    paper: "Papel premium · envelope forrado",
    greeting: "Amor,",
    body: "Escolho-te outra vez esta manhã, como escolhi ontem e como espero escolher amanhã. Contigo, até os dias comuns parecem ter sido feitos à medida.",
    signoff: "Sempre teu,",
    signature: "M.",
  },
  {
    id: "amigo",
    recipient: "Ao meu amigo",
    occasion: "Reconciliação",
    occasionIcon: Handshake,
    tone: "Sereno",
    paper: "Papel essencial · envio simples",
    greeting: "Amigo,",
    body: "Demorei a escrever isto, mas não quero que o silêncio decida por nós. Sinto falta das nossas conversas longas e gostava de voltar a tê-las, sem pressa de resolver tudo de uma vez.",
    signoff: "Com respeito e amizade,",
    signature: "O teu amigo",
  },
];

/** Escreve o texto carácter a carácter, como uma caneta sobre o papel. */
function useHandwriting(text: string) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [prevText, setPrevText] = useState(text);

  // Reinicia a escrita quando o texto muda (ajuste de estado durante o render).
  if (prevText !== text) {
    setPrevText(text);
    setCount(0);
  }

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setCount((current) => (current >= text.length ? current : current + 1));
    }, 22);
    return () => clearInterval(id);
  }, [text, reduceMotion]);

  const shown = reduceMotion ? text.length : Math.min(count, text.length);
  return { visible: text.slice(0, shown), done: shown >= text.length };
}

export function DemoSection() {
  const [activeId, setActiveId] = useState(presets[0].id);
  const active = presets.find((p) => p.id === activeId) ?? presets[0];
  const fullText = `${active.greeting}\n\n${active.body}\n\n${active.signoff}`;
  const { visible, done } = useHandwriting(fullText);

  return (
    <section className="bg-parchment/40 py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading
          eyebrow="Vê como é"
          title="Escolhe uma pessoa. Vê a carta ganhar forma."
          description="Pré-visualização ilustrativa do fluxo de criação — a versão final é sempre tua para editar."
        />

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-2.5">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setActiveId(preset.id)}
                className={cn(
                  "flex items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-300",
                  preset.id === activeId
                    ? "border-gold bg-cream shadow-glow-gold"
                    : "border-border bg-surface-elevated hover:border-border-strong"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    preset.id === activeId
                      ? "bg-gold/25 text-espresso"
                      : "bg-parchment text-brown"
                  )}
                >
                  <preset.occasionIcon size={18} aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-serif text-[0.95rem] text-ink">
                    Para {preset.recipient} &middot; {preset.occasion}
                  </span>
                  <span className="text-xs text-brown">Tom: {preset.tone}</span>
                </span>
              </button>
            ))}

            <p className="mt-2 rounded-2xl border border-almond/50 bg-cream/70 p-4 text-xs leading-relaxed text-brown">
              Assim que aprovas o texto, imprimimos em {""}
              <span className="text-espresso">{active.paper.toLowerCase()}</span> e
              entregamos em 2–4 dias úteis, com número de acompanhamento.
            </p>
          </div>

          <LetterSheet className="min-h-[380px] w-full px-7 py-8 sm:px-10 sm:py-10">
            <p className="ink-hand mb-3 text-right text-base leading-none text-brown/90 sm:text-lg">
              Lisboa, 9 de julho
            </p>
            <div className="ink-hand min-h-[220px] text-[1.3rem] leading-[1.55] sm:text-[1.45rem]">
              <p className="whitespace-pre-line">
                {visible}
                {!done ? <span className="writing-caret" aria-hidden /> : null}
              </p>
              {done ? (
                <p className="animate-fade-in-up ml-8 mt-1 rotate-[-2deg] text-[1.6rem]">
                  {active.signature}
                </p>
              ) : null}
            </div>
          </LetterSheet>
        </div>
      </Container>
    </section>
  );
}
