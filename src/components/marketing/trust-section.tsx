import { ShieldCheck, Eye, Trash2, ShieldBan } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const points = [
  {
    icon: Eye,
    title: "Aprovas sempre",
    text: "Nada é enviado sem a tua confirmação explícita. A carta é sempre revista por ti primeiro.",
  },
  {
    icon: ShieldCheck,
    title: "Dados protegidos",
    text: "Os teus dados e os do destinatário são tratados com segurança e nunca partilhados.",
  },
  {
    icon: Trash2,
    title: "Direito ao apagamento",
    text: "Podes pedir a eliminação dos teus dados e cartas a qualquer momento.",
  },
  {
    icon: ShieldBan,
    title: "Sem abuso",
    text: "Não permitimos conteúdo que pressione, persiga ou fira alguém. Cada carta passa por essa verificação.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Confiança e privacidade"
          title="Escrito com cuidado. Guardado com respeito."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 0.08}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/20 text-espresso">
                <point.icon size={20} aria-hidden />
              </span>
              <h3 className="font-serif text-lg text-ink">{point.title}</h3>
              <p className="text-sm leading-relaxed text-brown">{point.text}</p>
            </Reveal>
          ))}
        </div>

        <p className="max-w-xl text-center text-sm leading-relaxed text-brown">
          Carta Alma foi criada para aproximar pessoas com respeito. Não deve ser
          usada para pressionar, perseguir ou ferir alguém.
        </p>
      </Container>
    </section>
  );
}
