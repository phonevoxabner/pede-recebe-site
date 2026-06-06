import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconBan, IconMonitor, IconMessageX, IconAlert } from "@/components/ui/icons";

const PROBLEMAS = [
  {
    icon: IconBan,
    title: "WhatsApp bloqueado no sábado à noite",
    description:
      "Você usou um aplicativo ou bot não-oficial, o WhatsApp identificou e bloqueou seu número. Justamente quando o movimento estava cheio.",
  },
  {
    icon: IconMonitor,
    title: "Sistema só funciona naquele PC específico",
    description:
      "Seu sistema precisa de instalação. Se precisar atender pelo celular, ou se o computador travar, os pedidos param de chegar.",
  },
  {
    icon: IconMessageX,
    title: "Pedido perdido porque alguém não viu",
    description:
      "A mensagem chegou, mas ninguém estava online naquele momento. O cliente esperou, não teve resposta e foi pedir no concorrente.",
  },
  {
    icon: IconAlert,
    title: "Seus dados nas mãos do iFood",
    description:
      "Em 2025, o iFood comprou a Anota AI — o maior sistema de automação de WhatsApp para restaurantes. Seus dados, seus clientes, seu histórico. Agora sob controle deles.",
  },
];

export default function Problema() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Por que sistemas de WhatsApp
            <br />
            <span className="text-vermelho">falham quando você mais precisa</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMAS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal bg-cinza-escuro border border-vermelho/15 hover:border-vermelho/30 rounded-2xl p-6 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-vermelho/10 flex items-center justify-center mb-4 group-hover:bg-vermelho/20 transition-colors">
                  <Icon size={22} color="#EF4444" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <SectionCTA
          texto="Chega de perder vendas por causa disso."
          botao="Resolver agora"
        />
      </div>
    </section>
  );
}
