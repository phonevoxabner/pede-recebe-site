import SectionLabel from "@/components/ui/SectionLabel";
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
    destaque: false,
    cta: "Falar com vendas",
  },
];

export default function Planos() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-cinza-escuro scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <SectionLabel>Planos e preços</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Simples, transparente,
            <br />
            <span className="text-amarelo">sem letra miúda</span>
          </h2>
          <p className="text-white/50 text-base">
            14 dias grátis em todos os planos. Sem cartão. Cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {PLANOS.map((plano, i) => (
            <div
              key={i}
              className="reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
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
                    ? "bg-preto border-amarelo/50 shadow-[0_0_40px_rgba(245,196,0,0.1)]"
                    : "bg-preto border-white/10 hover:border-white/20 transition-colors"
                }`}
              >
                <div className="mb-6">
                  <div className="text-white/60 text-sm font-medium mb-1">{plano.nome}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-condensed text-4xl font-bold ${plano.destaque ? "text-amarelo" : "text-white"}`}>
                      {plano.preco}
                    </span>
                    {plano.periodo && (
                      <span className="text-white/40 text-sm mb-1.5">{plano.periodo}</span>
                    )}
                  </div>
                  <p className="text-white/50 text-sm">{plano.descricao}</p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
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
                  href="/#contato"
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
      </div>
    </section>
  );
}
