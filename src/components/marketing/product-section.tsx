import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";
import { products } from "@/lib/constants/options";

const badgeLabel: Record<NonNullable<BadgeProps["variant"]>, string> = {
  free: "Grátis",
  premium: "Mais escolhido",
  soon: "Brevemente",
  manual: "Sob pedido",
  paid: "Pago",
  preparing: "Em preparação",
  shipped: "Enviado",
  neutral: "",
};

export function ProductSection() {
  return (
    <section id="produtos" className="bg-cream py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Escolhe a forma como a tua carta chega."
          description="Do essencial ao manuscrito. Sempre revisto por ti antes de seguir."
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.06} className="min-w-0">
              <Card
                variant={product.badge === "premium" ? "premium" : "paper"}
                className="flex h-full flex-col justify-between gap-4 p-5"
              >
                <div className="flex flex-col gap-1.5">
                  {product.badge ? (
                    <Badge variant={product.badge} className="w-fit px-2.5 py-0.5 text-[0.68rem]">
                      {badgeLabel[product.badge]}
                    </Badge>
                  ) : null}
                  <h3 className="font-serif text-lg leading-snug text-ink">{product.name}</h3>
                  {product.priceCents !== 0 ? (
                    <p className="font-serif text-xl text-ink">{product.priceLabel}</p>
                  ) : (
                    <p className="font-serif text-xl text-ink">0 €</p>
                  )}
                  <ul className="mt-1.5 flex flex-col gap-1.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 text-xs leading-snug text-espresso">
                        <Check size={13} className="mt-0.5 shrink-0 text-sage" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant={product.badge === "premium" ? "primary" : "soft"}
                  className="w-full min-w-0 whitespace-normal"
                >
                  <Link href="/criar-carta">
                    {product.priceCents === 0 ? "Começar grátis" : "Escolher"}
                  </Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
