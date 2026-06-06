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

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 pt-4">
          {PLANOS.map((plano, i) => (
            <div key={plano.nome} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
              {plano.destaque && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-amarelo text-preto text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    <IconStar size={11} color="#1A1209" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className={`h-full flex flex-col rounded-2xl p-7 card-hover border-2 hover:shadow-xl ${
                plano.destaque
                  ? "bg-preto border-preto shadow-2xl"
                  : "bg-white border-preto"
              }`}>
                <div className="mb-6">
                  <div className={`text-sm font-semibold mb-1 ${plano.destaque ? "text-white/50" : "text-preto/70"}`}>
                    {plano.nome}
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-condensed text-4xl font-bold ${plano.destaque ? "text-amarelo" : "text-preto"}`}>
                      {plano.preco}
                    </span>
                    {plano.periodo && (
                      <span className={`text-sm mb-1.5 ${plano.destaque ? "text-white/40" : "text-preto/60"}`}>
                        {plano.periodo}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plano.destaque ? "text-white/55" : "text-preto/70"}`}>
                    {plano.descricao}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {plano.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plano.destaque ? "bg-amarelo border-2 border-preto" : "bg-amarelo border-2 border-preto"
                      }`}>
                        <IconCheck size={11} color={"#1A1209"} />
                      </div>
                      <span className={`text-sm ${plano.destaque ? "text-white/75" : "text-preto/75"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contato"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-colors ${
                    plano.destaque
                      ? "bg-amarelo text-preto hover:bg-amarelo-claro shadow-lg shadow-amarelo/20"
                      : "border-2 border-preto text-preto hover:bg-preto hover:text-white"
                  }`}
                >
                  {plano.cta}
                  <IconArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
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
