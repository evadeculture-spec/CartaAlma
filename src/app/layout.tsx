import type { Metadata } from "next";
import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://cartaalma.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carta Alma — Diz o que ficou por dizer",
    template: "%s · Carta Alma",
  },
  description:
    "Carta Alma ajuda-te a escrever, preparar e enviar cartas físicas significativas para as pessoas mais importantes da tua vida. Cartas personalizadas, de agradecimento, amor ou pedido de desculpa — com ajuda delicada de IA e envio físico cuidado.",
  keywords: [
    "cartas personalizadas",
    "cartas físicas",
    "cartas com IA",
    "cartas românticas",
    "cartas para pais",
    "cartas para avós",
    "cartas de agradecimento",
    "carta de pedido de desculpa",
    "cartas premium",
    "lembretes de datas importantes",
    "presentes emocionais",
  ],
  authors: [{ name: "Carta Alma" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Carta Alma",
    title: "Carta Alma — Diz o que ficou por dizer",
    description:
      "Transformamos aquilo que sentes numa carta que chega às mãos de quem importa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carta Alma — Diz o que ficou por dizer",
    description:
      "Transformamos aquilo que sentes numa carta que chega às mãos de quem importa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${fraunces.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
