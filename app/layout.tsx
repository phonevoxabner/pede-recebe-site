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
  metadataBase: new URL("https://pederecebe.com"),
  title: {
    default: "Pede&Recebe | Pedidos pelo WhatsApp com API Oficial do Meta",
    template: "%s | Pede&Recebe",
  },
  description:
    "Sistema de pedidos via WhatsApp com API Oficial do Meta para restaurantes. Cardápio digital, painel de pedidos, programa de fidelidade e muito mais. Teste grátis por 14 dias, sem cartão.",
  keywords: [
    "pedidos whatsapp restaurante",
    "sistema de pedidos whatsapp",
    "api oficial whatsapp restaurante",
    "cardápio digital whatsapp",
    "whatsapp business restaurante",
    "painel de pedidos restaurante",
    "pede e recebe",
    "alternativa ifood",
    "receber pedidos whatsapp",
  ],
  authors: [{ name: "Pede&Recebe", url: "https://pederecebe.com" }],
  creator: "Pede&Recebe",
  publisher: "Pede&Recebe",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://pederecebe.com",
  },
  openGraph: {
    title: "Pede&Recebe | Pedidos pelo WhatsApp sem bloqueio",
    description:
      "API Oficial do WhatsApp para restaurantes. Cardápio digital, painel de pedidos, programa de fidelidade. Sem bloqueio, sem instalação, independente do iFood.",
    url: "https://pederecebe.com",
    siteName: "Pede&Recebe",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-pederecebe.png",
        width: 829,
        height: 301,
        alt: "Pede&Recebe - Pedidos pelo WhatsApp com API Oficial do Meta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pede&Recebe | Pedidos pelo WhatsApp sem bloqueio",
    description:
      "API Oficial do WhatsApp para restaurantes. Zero bloqueio, independente do iFood. Teste grátis 14 dias.",
    images: ["/logo-pederecebe.png"],
  },
  icons: {
    icon: "/logo-favicon.png",
    apple: "/logo-favicon.png",
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
