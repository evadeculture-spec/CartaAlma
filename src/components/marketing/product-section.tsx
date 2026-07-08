import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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
    <section id="produtos" className="bg-cream py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Produtos"
          title="Escolhe a forma como a tua carta chega."
          description="Do essencial ao manuscrito. Sempre revisto por ti antes de seguir."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08} className="min-w-0">
              <Card
                variant={product.badge === "premium" ? "premium" : "paper"}
                className="flex h-full flex-col justify-between"
              >
                <CardHeader>
                  {product.badge ? (
                    <Badge variant={product.badge} className="w-fit">
                      {badgeLabel[product.badge]}
                    </Badge>
                  ) : null}
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                  <p className="pt-2 font-serif text-2xl text-ink">{product.priceLabel}</p>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-espresso">
                        <Check size={16} className="mt-0.5 shrink-0 text-sage" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={product.badge === "premium" ? "primary" : "soft"}
                    className="w-full min-w-0 whitespace-normal"
                  >
                    <Link href="/criar-carta">
                      {product.priceCents === 0 ? "Começar grátis" : "Escolher este formato"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
