import { NotebookPen, WandSparkles, MailCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const acts = [
  {
    icon: NotebookPen,
    step: "01",
    title: "Conta-nos a história",
    description: "Escolhe a pessoa e responde a perguntas guiadas. Não precisas de saber por onde começar.",
  },
  {
    icon: WandSparkles,
    step: "02",
    title: "Encontramos as palavras",
    description: "Compomos a carta a partir do que sentes. Editas tudo, quantas vezes precisares.",
  },
  {
    icon: MailCheck,
    step: "03",
    title: "Chega às mãos certas",
    description: "Depois de aprovares, imprimimos, selamos e enviamos fisicamente para a morada certa.",
  },
];

const occasions = [
  "Aniversários",
  "Agradecimento",
  "Reconciliação",
  "Amor",
  "Casamentos",
  "Cartas futuras",
  "Despedidas",
  "Empresas",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-ivory py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do que sentes até à caixa de correio, em três passos."
          description="As mensagens rápidas perdem-se nas notificações. Uma carta física fica — e nós tratamos de tudo, menos do sentimento."
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {acts.map((act, i) => (
            <Reveal
              key={act.step}
              delay={i * 0.1}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-almond bg-ivory">
                <act.icon size={20} className="text-brown" aria-hidden />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-espresso text-[0.6rem] font-medium text-cream">
                  {act.step}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg leading-snug text-ink">{act.title}</h3>
                <p className="text-[0.83rem] leading-relaxed text-brown">{act.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {occasions.map((occasion) => (
            <li
              key={occasion}
              className="rounded-full border border-border bg-cream px-3.5 py-1.5 text-xs text-brown"
            >
              {occasion}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
