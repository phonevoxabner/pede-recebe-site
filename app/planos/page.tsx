"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconCheck, IconStar, IconArrowRight } from "@/components/ui/icons";

const PLANOS = [
  {
    nome: "Básico",
    precoMensal: 129,
    descricao: "Para quem está começando a automatizar os pedidos.",
    features: [
      "API Oficial WhatsApp",
      "1 número de WhatsApp",
      "Cardápio digital básico",
      "Até 300 pedidos/mês",
      "Painel de pedidos",
      "Suporte por e-mail",
    ],
    destaque: false,
    cta: "Começar teste grátis",
  },
  {
    nome: "Pro",
    precoMensal: 249,
    descricao: "Para restaurantes que querem crescer de verdade.",
    features: [
      "API Oficial WhatsApp",
      "2 números de WhatsApp",
      "Cardápio digital completo",
      "Pedidos ilimitados",
      "Painel de pedidos avançado",
      "Relatórios e analytics",
      "Pagamento online integrado",
      "Suporte humano prioritário",
    ],
    destaque: true,
    cta: "Começar teste grátis",
  },
  {
    nome: "Enterprise",
    precoMensal: null,
    descricao: "Para redes e franquias com múltiplas unidades.",
    features: [
      "Tudo do plano Pro",
      "Múltiplas unidades",
      "Integração com sistemas legados",
      "API personalizada",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    destaque: false,
    cta: "Falar com vendas",
  },
];

const FAQ_PLANOS = [
  {
    pergunta: "O que acontece depois dos 14 dias grátis?",
    resposta:
      "Após o período de teste, você escolhe o plano ideal e insere o cartão de crédito. Não cobramos nada sem autorização.",
  },
  {
    pergunta: "Posso mudar de plano depois?",
    resposta:
      "Sim. Você pode fazer upgrade ou downgrade a qualquer momento pelo painel. O ajuste é proporcional ao tempo restante.",
  },
  {
    pergunta: "O desconto anual é aplicado automaticamente?",
    resposta:
      "Ao escolher o plano anual, o desconto de 20% é aplicado no checkout. Você paga 12 meses pelo preço de 9,6.",
  },
];

export default function PlanosPage() {
  const [anual, setAnual] = useState(false);

  return (
    <>
      <section className="pt-28 pb-16 bg-cinza-escuro border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Planos e preços</SectionLabel>
          <h1 className="font-condensed text-5xl sm:text-6xl font-bold text-white leading-none mt-2 mb-4">
            Simples, transparente,
            <br />
            <span className="text-amarelo">sem letra miúda</span>
          </h1>
          <p className="text-white/50 text-lg mb-8">
            14 dias grátis em todos os planos. Sem cartão.
          </p>

          <div className="inline-flex items-center gap-1 bg-cinza-medio rounded-xl p-1">
            <button
              onClick={() => setAnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                !anual
                  ? "bg-amarelo text-preto"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                anual ? "bg-amarelo text-preto" : "text-white/50 hover:text-white"
              }`}
            >
              Anual
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  anual ? "bg-preto/20 text-preto" : "bg-verde/20 text-verde"
                }`}
              >
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {PLANOS.map((plano, i) => (
              <div key={i} className="relative">
                {plano.destaque && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-amarelo text-preto text-xs font-bold px-4 py-1.5 rounded-full">
                      <IconStar size={12} color="#111111" />
                      Mais popular
                    </span>
                  </div>
                )}

                <div
                  className={`h-full flex flex-col rounded-2xl p-8 border ${
                    plano.destaque
                      ? "bg-cinza-escuro border-amarelo/50 shadow-[0_0_40px_rgba(245,196,0,0.1)]"
                      : "bg-cinza-escuro border-white/10"
                  }`}
                >
                  <div className="mb-6">
                    <div className="text-white/60 text-sm font-medium mb-1">
                      {plano.nome}
                    </div>
                    <div className="flex items-end gap-1 mb-2">
                      {plano.precoMensal ? (
                        <>
                          <span
                            className={`font-condensed text-4xl font-bold ${
                              plano.destaque ? "text-amarelo" : "text-white"
                            }`}
                          >
                            R${" "}
                            {anual
                              ? Math.round(plano.precoMensal * 0.8)
                              : plano.precoMensal}
                          </span>
                          <span className="text-white/40 text-sm mb-1.5">
                            /mês
                          </span>
                        </>
                      ) : (
                        <span className="font-condensed text-3xl font-bold text-white">
                          Sob consulta
                        </span>
                      )}
                    </div>
                    {plano.precoMensal && anual && (
                      <div className="text-verde text-xs font-medium mb-2">
                        Cobrado anualmente (R${" "}
                        {Math.round(plano.precoMensal * 0.8 * 12)}/ano)
                      </div>
                    )}
                    <p className="text-white/50 text-sm">{plano.descricao}</p>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plano.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-verde/15 flex items-center justify-center shrink-0 mt-0.5">
                          <IconCheck size={11} color="#22C55E" />
                        </div>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contato"
                    className={`flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl transition-colors ${
                      plano.destaque
                        ? "bg-amarelo text-preto hover:bg-amarelo-claro"
                        : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    {plano.cta}
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            14 dias grátis em todos os planos. Sem cartão. Cancele quando quiser.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cinza-escuro border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-bold text-white text-center mb-10">
            Dúvidas sobre os planos
          </h2>
          <div className="space-y-6">
            {FAQ_PLANOS.map((item, i) => (
              <div
                key={i}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <h3 className="text-white font-semibold mb-2">{item.pergunta}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
