import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pede&Recebe — Pedidos pelo WhatsApp sem bloqueio",
  description:
    "Sistema de pedidos via WhatsApp com API Oficial do Meta. Sem risco de bloqueio, funciona no navegador em qualquer dispositivo, independente do iFood.",
  openGraph: {
    title: "Pede&Recebe — Pedidos pelo WhatsApp sem bloqueio",
    description:
      "API Oficial do WhatsApp para restaurantes. Sem bloqueio, sem instalação, independente do iFood.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pede&Recebe — Pedidos pelo WhatsApp",
    description: "API Oficial do WhatsApp para restaurantes. Zero bloqueio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-amarelo focus:text-preto focus:px-4 focus:py-2 focus:rounded-lg font-semibold"
        >
          Pular para o conteúdo
        </a>
        <Nav />
        <ScrollReveal />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
