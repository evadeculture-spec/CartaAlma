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
      "A IA ajuda-te a encontrar as palavras a partir do que partilhas connosco, mas o resultado é sempre teu para editar e aprovar.",
  },
  {
    question: "Posso escrever eu e usar apenas a plataforma para envio?",
    answer:
      "Sim. Podes ignorar a geração automática e escrever o texto do zero — usamos a plataforma apenas para preparar e enviar.",
  },
  {
    question: "Posso criar lembretes?",
    answer:
      "Sim, e é gratuito. Guarda datas importantes e recebe um aviso com antecedência para escreveres com calma.",
  },
  {
    question: "Posso enviar cartas no futuro?",
    answer:
      "Sim. Podes escrever hoje e agendar o envio para uma data futura — incluindo cartas para abrir daqui a vários anos.",
  },
  {
    question: "Os meus dados ficam seguros?",
    answer:
      "Sim. Os teus dados e os do destinatário são protegidos e nunca partilhados. Podes pedir a sua eliminação a qualquer momento.",
  },
  {
    question: "Posso pedir carta manuscrita?",
    answer:
      "Sim, por um escriba profissional, sob pedido. É uma opção mais cuidada para ocasiões especiais.",
  },
  {
    question: "Posso enviar para fora de Portugal?",
    answer:
      "Sim, o envio internacional está previsto. No lançamento, os prazos podem variar consoante o destino.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "A preparação é manual e cuidada. Em geral, conta com alguns dias entre aprovação e entrega — o prazo exato aparece antes do pagamento.",
  },
  {
    question: "Posso cancelar antes de ser enviada?",
    answer:
      "Sim, enquanto a carta ainda não entrou em preparação. Depois disso, contacta-nos e ajudamos a encontrar a melhor solução.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Perguntas frequentes" title="O que ainda queres saber." />
        <div className="w-full max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
