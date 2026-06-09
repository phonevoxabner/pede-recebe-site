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
import QuemEstaPorTras from "@/components/landing/QuemEstaPorTras";
import EarlyAdopter from "@/components/landing/EarlyAdopter";
import LogosClientes from "@/components/landing/LogosClientes";

export const metadata: Metadata = {
  title: "Pede&Recebe | Pedidos pelo WhatsApp com API Oficial do Meta",
  description:
    "Sistema de pedidos via WhatsApp com API Oficial do Meta para restaurantes. Cardápio digital, painel de pedidos, fidelidade e muito mais. Sem risco de bloqueio, independente do iFood. Teste grátis por 14 dias.",
  alternates: {
    canonical: "https://pederecebe.com",
  },
  openGraph: {
    title: "Pede&Recebe | Pedidos pelo WhatsApp sem bloqueio",
    description:
      "API Oficial do WhatsApp para restaurantes. Cardápio digital, painel de pedidos, programa de fidelidade. Seu número nunca bloqueia. Independente do iFood.",
    url: "https://pederecebe.com",
    type: "website",
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pede&Recebe",
  url: "https://pederecebe.com",
  description:
    "Sistema de pedidos via WhatsApp com API Oficial do Meta para restaurantes. Cardápio digital, painel de pedidos, programa de fidelidade e entregas.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "pt-BR",
  offers: [
    {
      "@type": "Offer",
      name: "Plano Básico",
      price: "129",
      priceCurrency: "BRL",
      priceValidUntil: "2026-12-31",
      description: "Até 300 pedidos/mês, 1 número de WhatsApp, cardápio digital.",
    },
    {
      "@type": "Offer",
      name: "Plano Pro",
      price: "249",
      priceCurrency: "BRL",
      priceValidUntil: "2026-12-31",
      description: "Pedidos ilimitados, 2 números de WhatsApp, fidelidade, entregas e muito mais.",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso de uma conta WhatsApp Business para usar o Pede&Recebe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, você precisa de um número de telefone para vincular à API Oficial do WhatsApp. Nós cuidamos de todo o processo de aprovação e configuração junto ao Meta.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é a diferença entre a API Oficial e outros sistemas de WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sistemas não-oficiais violam os termos de uso do Meta e podem ter o número bloqueado. A API Oficial é uma integração autorizada diretamente com o Meta. Seu número nunca será banido por usar nossa plataforma.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona junto com o iFood também?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, você pode usar o Pede&Recebe junto com o iFood. O objetivo é que você tenha um canal direto com seus clientes, sem pagar comissão de 20% a 30% ao iFood em cada pedido.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para configurar e começar a receber pedidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Em média 10 a 15 minutos para criar sua conta, cadastrar o cardápio básico e vincular o número de WhatsApp. Você começa a receber pedidos no mesmo dia.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancelar quando quiser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sem multa, sem fidelidade, sem burocracia. Você cancela quando quiser, direto pelo painel. Não cobramos nada após o cancelamento.",
      },
    },
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pede&Recebe",
  url: "https://pederecebe.com",
  logo: "https://pederecebe.com/logo-pederecebe.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Portuguese",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <Hero />
      <StatsBar />
      <LogosClientes />
      <Problema />
      <Diferenciais />
      <QuemEstaPorTras />
      <ModulosSection />
      <Funcionalidades />
      <Comparativo />
      <ComoFunciona />
      <Depoimentos />
      <EarlyAdopter />
      <Planos />
      <FAQ />
      <ContatoSection />
      <CTAFinal />
    </>
  );
}
