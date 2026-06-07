import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconBan, IconMonitor, IconMessageX, IconAlert } from "@/components/ui/icons";

const PROBLEMAS = [
  {
    icon: IconBan,
    title: "WhatsApp bloqueado no sábado à noite",
    description: "Você usou um aplicativo ou bot não-oficial, o WhatsApp identificou e bloqueou seu número. Justamente quando o movimento estava cheio.",
  },
  {
    icon: IconMonitor,
    title: "Sistema só funciona naquele PC específico",
    description: "Seu sistema precisa de instalação. Se precisar atender pelo celular, ou se o computador travar, os pedidos param de chegar.",
  },
  {
    icon: IconMessageX,
    title: "Pedido perdido porque alguém não viu",
    description: "A mensagem chegou, mas ninguém estava online naquele momento. O cliente esperou, não teve resposta e foi pedir no concorrente.",
  },
  {
    icon: IconAlert,
    title: "Seus dados nas mãos do iFood",
    description: "Em 2025, o iFood comprou a Anota AI, o maior sistema de automação de WhatsApp para restaurantes. Seus dados, seus clientes, seu histórico. Agora sob controle deles.",
  },
];

export default function Problema() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "#FEFCF5" }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amarelo/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            Por que sistemas de WhatsApp
            <br />
            falham quando você mais precisa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMAS.map((item, i) => {
            const Icon = item.icon;
            const isIfood = i === 3;
            return (
              <div
                key={item.title}
                className={`reveal bg-amarelo border-2 rounded-2xl p-6 card-hover hover:shadow-lg group relative overflow-hidden ${
                  isIfood
                    ? "border-vermelho shadow-[0_0_0_1px_rgba(239,68,68,0.2)]"
                    : "border-preto"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {isIfood && (
                  <span className="absolute top-4 right-4 bg-vermelho text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Atenção
                  </span>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: [
                    "#1A1209",   // ban — preto
                    "#1d4ed8",   // monitor — azul
                    "#7c3aed",   // message — roxo
                    "#EF4444",   // alert — vermelho
                  ][i] }}
                >
                  <Icon size={20} color="#FFFFFF" />
                </div>
                <h3 className="text-preto font-semibold text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-preto/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <SectionCTA texto="Chega de perder vendas por causa disso." botao="Resolver agora" />
      </div>
    </section>
  );
}
