import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";

const STEPS = [
  {
    number: "01",
    title: "Cadastre seu restaurante",
    description:
      "Crie sua conta, configure o cardápio e personalize as respostas automáticas em menos de 10 minutos. Sem precisar instalar nada.",
  },
  {
    number: "02",
    title: "Compartilhe o link",
    description:
      "Divulgue o link do seu cardápio digital no Instagram, nos stories, na entrada do restaurante, onde quiser. O cliente abre no próprio celular.",
  },
  {
    number: "03",
    title: "Venda enquanto dorme",
    description:
      "Os pedidos chegam pelo WhatsApp, o sistema responde automaticamente, confirma, cobra e organiza no painel. Você só cuida da cozinha.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-cinza-escuro scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Comece a vender em
            <br />
            <span className="text-amarelo">3 passos simples</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-amarelo/20"
            aria-hidden="true"
          />
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="reveal flex flex-col items-center text-center lg:items-start lg:text-left"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-amarelo flex items-center justify-center font-condensed text-2xl font-bold text-preto mb-6 shrink-0 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 font-condensed">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SectionCTA
          texto="10 minutos para configurar. Comece hoje mesmo."
          botao="Quero configurar agora"
        />
      </div>
    </section>
  );
}
