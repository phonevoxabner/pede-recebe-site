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
    <section id="como-funciona" className="bg-amarelo py-16 sm:py-20 lg:py-28 scroll-mt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <SectionLabel onYellow>Como funciona</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            Comece a vender em
            <br />
            3 passos simples
          </h2>
        </div>

        <div className="relative">
          {/* Linha conectora desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.67%+48px)] right-[calc(16.67%+48px)] h-0.5 pointer-events-none"
            style={{ background: "repeating-linear-gradient(90deg, #1A1209 0px, #1A1209 8px, transparent 8px, transparent 18px)", opacity: 0.25 }}
            aria-hidden="true"
          />
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Número grande */}
                <div className="relative mb-8 shrink-0 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-preto flex items-center justify-center shadow-xl">
                    <span className="font-condensed text-3xl font-extrabold text-amarelo leading-none">
                      {step.number}
                    </span>
                  </div>
                  {/* Seta para o próximo (mobile/tablet, exceto último) */}
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 text-preto/30" aria-hidden="true">
                      <svg width="16" height="20" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="8" y1="0" x2="8" y2="16"/>
                        <polyline points="3,12 8,18 13,12"/>
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-preto font-bold text-xl mb-4 font-condensed">{step.title}</h3>
                <p className="text-preto/75 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
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
