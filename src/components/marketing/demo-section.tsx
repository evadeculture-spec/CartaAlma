"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cake, HandHeart, Heart, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FloatingEnvelope3D } from "@/components/3d/FloatingEnvelope3D";
import { cn } from "@/lib/utils";

interface DemoPreset {
  id: string;
  recipient: string;
  occasion: string;
  occasionIcon: typeof Cake;
  tone: string;
  letter: string;
}

const presets: DemoPreset[] = [
  {
    id: "avo",
    recipient: "Avó",
    occasion: "Agradecimento",
    occasionIcon: HandHeart,
    tone: "Emocional",
    letter:
      "Avó,\n\nHá coisas que só percebemos tarde demais — e uma delas é o quanto o teu colo me ensinou sobre paciência. Obrigada por cada tarde de domingo, por cada história repetida com o mesmo carinho da primeira vez.\n\nCom saudade de perto,\nA tua neta",
  },
  {
    id: "parceiro",
    recipient: "O meu amor",
    occasion: "Amor",
    occasionIcon: Heart,
    tone: "Romântico",
    letter:
      "Amor,\n\nEscolho-te outra vez esta manhã, como escolhi ontem e como espero escolher amanhã. Contigo, até os dias comuns parecem ter sido feitos à medida.\n\nSempre teu,",
  },
  {
    id: "amigo",
    recipient: "Ao meu amigo",
    occasion: "Reconciliação",
    occasionIcon: Handshake,
    tone: "Sereno",
    letter:
      "Amigo,\n\nDemorei a escrever isto, mas não quero que o silêncio decida por nós. Sinto falta das nossas conversas longas e gostava de voltar a tê-las, sem pressa de resolver tudo de uma vez.\n\nCom respeito e amizade,",
  },
];

export function DemoSection() {
  const [activeId, setActiveId] = useState(presets[0].id);
  const active = presets.find((p) => p.id === activeId) ?? presets[0];

  return (
    <section className="bg-parchment/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Vê como é"
          title="Escolhe uma pessoa. Vê a carta ganhar forma."
          description="Uma pré-visualização ilustrativa do que acontece no fluxo de criação."
        />

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-brown/70">
              Escolhe uma combinação
            </span>
            <div className="flex flex-col gap-3">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActiveId(preset.id)}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                    preset.id === activeId
                      ? "border-gold bg-cream shadow-glow-gold"
                      : "border-border bg-surface-elevated hover:border-border-strong"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                      preset.id === activeId ? "bg-gold/25 text-espresso" : "bg-parchment text-brown"
                    )}
                  >
                    <preset.occasionIcon size={20} aria-hidden />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-serif text-base text-ink">
                      Para {preset.recipient} &middot; {preset.occasion}
                    </span>
                    <span className="text-xs text-brown">Tom: {preset.tone}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-4 rounded-2xl border border-almond/50 bg-cream p-6 shadow-paper sm:p-8">
            <Badge variant="soon" className="w-fit">
              Pré-visualização ilustrativa
            </Badge>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)", y: -8 }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                className="min-h-[220px] whitespace-pre-line font-letter text-lg leading-relaxed text-espresso"
              >
                {active.letter}
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 border-t border-border pt-6">
              <FloatingEnvelope3D className="max-w-[220px] mx-auto" peekLetter />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
