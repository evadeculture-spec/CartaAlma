"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#produtos", label: "Produtos" },
  { href: "#lembretes", label: "Lembretes" },
  { href: "#faq", label: "Perguntas" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/85 shadow-soft backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">
          Carta Alma
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brown transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/lembretes">Criar lembrete</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/criar-carta">Escrever uma carta</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-border bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-brown hover:bg-ivory hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3">
              <Button asChild variant="ghost" size="sm">
                <Link href="/lembretes">Criar lembrete</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/criar-carta">Escrever uma carta</Link>
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
