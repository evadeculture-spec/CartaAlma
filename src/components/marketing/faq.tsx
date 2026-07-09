import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/marketing/section-heading";

const faqItems = [
  {
    question: "A carta é mesmo enviada fisicamente?",
    answer:
      "Sim. Depois de aprovares o texto, imprimimos, preparamos e enviamos a carta para a morada do destinatário.",
  },
  {
    question: "Posso editar antes de enviar?",
    answer:
      "Sempre. Podes reescrever, ajustar o tom ou pedir uma nova versão. A carta só segue depois da tua aprovação final.",
  },
  {
    question: "A IA escreve tudo por mim?",
    answer:
      "A IA ajuda-te a encontrar as palavras a partir do que partilhas, mas o resultado é sempre teu para editar e aprovar. Também podes escrever tudo do zero e usar-nos só para o envio.",
  },
  {
    question: "Posso enviar cartas no futuro?",
    answer:
      "Sim. Podes escrever hoje e agendar o envio para uma data futura — incluindo cartas para abrir daqui a vários anos.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "A preparação é manual e cuidada. Em geral, conta com 2 a 4 dias úteis entre aprovação e entrega — o prazo exato aparece antes do pagamento.",
  },
  {
    question: "Posso pedir carta manuscrita?",
    answer:
      "Sim, escrita à mão por um escriba profissional, sob pedido. É a opção mais cuidada para ocasiões especiais.",
  },
  {
    question: "Posso enviar para fora de Portugal?",
    answer:
      "Sim, o envio internacional está previsto. No lançamento, os prazos podem variar consoante o destino.",
  },
  {
    question: "Os meus dados ficam seguros?",
    answer:
      "Sim. Os teus dados e os do destinatário são protegidos e nunca partilhados. Podes pedir a sua eliminação a qualquer momento.",
  },
];

export function FAQ() {
  const mid = Math.ceil(faqItems.length / 2);

  return (
    <section id="faq" className="bg-cream py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading eyebrow="Perguntas frequentes" title="O que ainda queres saber." />
        <div className="grid w-full gap-x-12 lg:grid-cols-2">
          <Accordion items={faqItems.slice(0, mid)} />
          <Accordion items={faqItems.slice(mid)} />
        </div>
      </Container>
    </section>
  );
}
