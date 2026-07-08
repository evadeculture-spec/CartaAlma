import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ivory">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="font-serif text-xl text-ink">Carta Alma</span>
            <p className="mt-3 text-sm leading-relaxed text-brown">
              A carta continua tua. Nós só ajudamos a encontrar as palavras.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-brown/70">
                Produto
              </span>
              <a href="#como-funciona" className="text-sm text-brown hover:text-ink">
                Como funciona
              </a>
              <a href="#produtos" className="text-sm text-brown hover:text-ink">
                Produtos
              </a>
              <a href="#lembretes" className="text-sm text-brown hover:text-ink">
                Lembretes
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-brown/70">
                Suporte
              </span>
              <a href="#faq" className="text-sm text-brown hover:text-ink">
                Perguntas frequentes
              </a>
              <a
                href="mailto:ola@cartaalma.com"
                className="text-sm text-brown hover:text-ink"
              >
                ola@cartaalma.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-brown/70">
                Legal
              </span>
              <Link href="/privacidade" className="text-sm text-brown hover:text-ink">
                Privacidade
              </Link>
              <Link href="/termos" className="text-sm text-brown hover:text-ink">
                Termos
              </Link>
              <Link href="/cookies" className="text-sm text-brown hover:text-ink">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-brown/70 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Carta Alma. Feito com cuidado, em Portugal.</span>
          <span>Fulfillment preparado manualmente pela nossa equipa, com carinho.</span>
        </div>
      </Container>
    </footer>
  );
}
