import { ShieldCheck, Eye, Trash2, ShieldBan } from "lucide-react";
import { Container } from "@/components/ui/container";

const points = [
  { icon: Eye, text: "Aprovas sempre antes do envio" },
  { icon: ShieldCheck, text: "Dados protegidos · RGPD" },
  { icon: Trash2, text: "Eliminação a pedido, a qualquer momento" },
  { icon: ShieldBan, text: "Conteúdo verificado contra abuso" },
];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-ivory py-5">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5">
          {points.map((point) => (
            <li key={point.text} className="flex items-center gap-2 text-[0.8rem] text-brown">
              <point.icon size={15} className="text-sage" aria-hidden />
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
