"use client";

import { useState, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconCheck, IconStar, IconArrowRight } from "@/components/ui/icons";

const PLANOS = [
  {
    nome: "Básico",
    preco: "R$129",
    periodo: "/mês",
    descricao: "Para quem está começando a automatizar os pedidos.",
    features: [
      "API Oficial WhatsApp",
      "1 número de WhatsApp",
      "Cardápio digital",
      "Até 300 pedidos/mês",
      "Painel de pedidos",
      "Financeiro básico",
      "Controle de estoque",
      "Suporte por e-mail",
    ],
    variante: "claro" as const,
    destaque: false,
    cta: "Começar teste grátis",
  },
  {
    nome: "Pro",
    preco: "R$249",
    periodo: "/mês",
    descricao: "Para restaurantes que querem crescer de verdade.",
    features: [
      "API Oficial WhatsApp",
      "2 números de WhatsApp",
      "Cardápio digital completo",
      "Pedidos ilimitados",
      "Painel de pedidos avançado",
      "Financeiro completo + relatórios",
      "Gestão de entregas e entregadores",
      "Programa de fidelidade",
      "Cupons de desconto",
      "Pagamento online integrado",
      "Suporte humano prioritário",
    ],
    variante: "marrom" as const,
    destaque: true,
    cta: "Começar teste grátis",
  },
  {
    nome: "Enterprise",
    preco: "Sob consulta",
    periodo: "",
    descricao: "Para redes e franquias com múltiplas unidades.",
    features: [
      "Tudo do plano Pro",
      "Múltiplas unidades",
      "Integração com sistemas legados",
      "API personalizada",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    variante: "preto" as const,
    destaque: false,
    cta: "Falar com vendas",
  },
];

const ESTILOS = {
  claro: {
    card: "bg-amarelo-suave border-preto",
    nome: "text-preto/70",
    preco: "text-preto",
    periodo: "text-preto/60",
    desc: "text-preto/70",
    feature: "text-preto/75",
    cta: "border-2 border-preto text-preto hover:bg-preto hover:text-white",
  },
  marrom: {
    card: "bg-preto border-preto shadow-2xl",
    nome: "text-white/60",
    preco: "text-amarelo",
    periodo: "text-white/50",
    desc: "text-white/60",
    feature: "text-white/80",
    cta: "bg-amarelo text-preto hover:brightness-110 shadow-lg",
  },
  preto: {
    card: "border-preto shadow-2xl",
    nome: "text-white/50",
    preco: "text-amarelo",
    periodo: "text-white/40",
    desc: "text-white/55",
    feature: "text-white/75",
    cta: "bg-amarelo text-preto hover:brightness-110 shadow-lg",
  },
};

function CardInner({ plano, inCarousel = false }: { plano: typeof PLANOS[0]; inCarousel?: boolean }) {
  const s = ESTILOS[plano.variante];
  return (
    <div
      className={`flex flex-col rounded-2xl p-7 border-2 relative overflow-hidden ${inCarousel ? "" : "hover:shadow-xl"} ${s.card}`}
      style={plano.variante === "preto" ? { background: "linear-gradient(135deg, #1A1209 0%, #2d2010 50%, #1A1209 100%)" } : undefined}
    >
      {plano.variante === "marrom" && (
        <>
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-amarelo/8 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-amarelo/8 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amarelo/4 pointer-events-none" />
        </>
      )}
      <div className="relative z-10 mb-6">
        <div className={`text-sm font-semibold mb-1 ${s.nome}`}>{plano.nome}</div>
        <div className="flex items-end gap-1 mb-1">
          <span className={`font-condensed text-4xl font-bold leading-none ${s.preco}`}>{plano.preco}</span>
          {plano.periodo && <span className={`text-sm mb-1.5 ${s.periodo}`}>{plano.periodo}</span>}
        </div>
        {plano.nome === "Pro" && (
          <p className="text-white/40 text-xs italic mb-1.5">Equivale a menos de 1 pedido por dia no iFood</p>
        )}
        <p className={`text-sm ${s.desc}`}>{plano.descricao}</p>
      </div>
      <ul className="relative z-10 flex flex-col gap-2.5 flex-1 mb-7">
        {plano.features.map((f, j) => (
          <li key={j} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-amarelo border-2 border-preto flex items-center justify-center shrink-0 mt-0.5">
              <IconCheck size={11} color="#1A1209" />
            </div>
            <span className={`text-sm ${s.feature}`}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/#contato"
        className={`relative z-10 flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all ${s.cta}`}
      >
        {plano.cta}
        <IconArrowRight size={16} />
      </a>
    </div>
  );
}

export default function Planos() {
  const [idx, setIdx] = useState(1);
  const touchStartX = useRef(0);

  function prev() { setIdx((i) => Math.max(0, i - 1)); }
  function next() { setIdx((i) => Math.min(PLANOS.length - 1, i + 1)); }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) delta > 0 ? next() : prev();
  }

  return (
    <section id="planos" className="py-12 sm:py-16 lg:py-24 bg-amarelo scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel onYellow>Planos e preços</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mb-4 mt-2">
            Simples, transparente,
            <br />
            sem letra miúda
          </h2>
          <p className="text-preto/70 text-base">
            14 dias grátis em todos os planos. Sem cartão. Cancele quando quiser.
          </p>
        </div>

        {/* ── Desktop: grid ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 md:gap-6 items-start pt-6">
          {PLANOS.map((plano, i) => (
            <div key={plano.nome} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="card-hover relative">
                {plano.destaque && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-amarelo text-preto text-xs font-bold px-5 py-2 rounded-full border-2 border-preto shadow-xl pointer-events-auto whitespace-nowrap badge-pulse">
                      <IconStar size={12} color="#1A1209" />
                      Mais popular
                    </span>
                  </div>
                )}
                <CardInner plano={plano} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: carousel ── */}
        <div className="md:hidden">
          <div className="relative flex items-center gap-2">
            {/* Seta esquerda */}
            <button
              onClick={prev}
              disabled={idx === 0}
              className="shrink-0 w-9 h-9 rounded-full border-2 border-preto bg-preto text-amarelo flex items-center justify-center disabled:opacity-30 transition-opacity z-10"
              aria-label="Plano anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Slides */}
            <div
              className="flex-1 overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${idx * 100}%)` }}
              >
                {PLANOS.map((plano) => (
                  <div key={plano.nome} className="min-w-full flex flex-col pt-5">
                    {plano.destaque ? (
                      <div className="flex justify-center mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-amarelo text-preto text-xs font-bold px-5 py-2 rounded-full border-2 border-preto shadow-xl whitespace-nowrap badge-pulse">
                          <IconStar size={12} color="#1A1209" />
                          Mais popular
                        </span>
                      </div>
                    ) : (
                      <div className="h-[34px]" />
                    )}
                    <CardInner plano={plano} inCarousel />
                  </div>
                ))}
              </div>
            </div>

            {/* Seta direita */}
            <button
              onClick={next}
              disabled={idx === PLANOS.length - 1}
              className="shrink-0 w-9 h-9 rounded-full border-2 border-preto bg-preto text-amarelo flex items-center justify-center disabled:opacity-30 transition-opacity z-10"
              aria-label="Próximo plano"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-5">
            {PLANOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === idx ? "w-6 h-2.5 bg-preto" : "w-2.5 h-2.5 bg-preto/25"
                }`}
                aria-label={`Ir para plano ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <SectionCTA
          texto="14 dias grátis, sem cartão, cancele quando quiser."
          botao="Escolher meu plano"
          onYellow
        />
      </div>
    </section>
  );
}
