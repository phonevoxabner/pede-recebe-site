import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";

const STEPS = [
  {
    number: "01",
    title: "Cadastre seu restaurante",
    description: "Crie sua conta, configure o cardápio e personalize as respostas automáticas em menos de 10 minutos. Sem precisar instalar nada.",
  },
  {
    number: "02",
    title: "Compartilhe o link",
    description: "Divulgue o link do seu cardápio digital no Instagram, nos stories, na entrada do restaurante, onde quiser. O cliente abre no próprio celular.",
  },
  {
    number: "03",
    title: "Venda enquanto dorme",
    description: "Os pedidos chegam pelo WhatsApp, o sistema responde automaticamente, confirma, cobra e organiza no painel. Você só cuida da cozinha.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-amarelo py-12 sm:py-16 lg:py-24 scroll-mt-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel onYellow>Como funciona</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            Comece a vender em
            <br />
            3 passos simples
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-preto/20"
            aria-hidden="true"
          />
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-preto flex items-center justify-center font-condensed text-2xl font-bold text-amarelo mb-6 shrink-0 relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-preto font-bold text-xl mb-3 font-condensed">{step.title}</h3>
                <p className="text-preto/75 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionCTA
          onYellow
            texto="10 minutos para configurar. Comece hoje mesmo."
            botao="Quero configurar agora"
          />
        </div>
      </div>
    </section>
  );
}
