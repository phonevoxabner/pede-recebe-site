import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import Problema from "@/components/landing/Problema";
import Diferenciais from "@/components/landing/Diferenciais";
import ModulosSection from "@/components/landing/ModulosSection";
import Funcionalidades from "@/components/landing/Funcionalidades";
import Comparativo from "@/components/landing/Comparativo";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Depoimentos from "@/components/landing/Depoimentos";
import Planos from "@/components/landing/Planos";
import FAQ from "@/components/landing/FAQ";
import ContatoSection from "@/components/landing/ContatoSection";
import CTAFinal from "@/components/landing/CTAFinal";

export const metadata: Metadata = {
  title: "Pede&Recebe — Pedidos pelo WhatsApp sem bloqueio | API Oficial Meta",
  description:
    "Sistema de pedidos via WhatsApp com API Oficial do Meta para restaurantes. Sem risco de bloqueio, funciona no navegador, independente do iFood. Teste grátis por 14 dias.",
  openGraph: {
    title: "Pede&Recebe — Pedidos pelo WhatsApp sem bloqueio",
    description:
      "API Oficial do WhatsApp para restaurantes. Seu número nunca bloqueia. Funciona no navegador. Independente do iFood.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Pede&Recebe",
            description:
              "Sistema de pedidos via WhatsApp com API Oficial do Meta para restaurantes",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "129",
              priceCurrency: "BRL",
            },
          }),
        }}
      />
      <Hero />
      <StatsBar />
      <Problema />
      <Diferenciais />
      <ModulosSection />
      <Funcionalidades />
      <Comparativo />
      <ComoFunciona />
      <Depoimentos />
      <Planos />
      <FAQ />
      <ContatoSection />
      <CTAFinal />
    </>
  );
}
