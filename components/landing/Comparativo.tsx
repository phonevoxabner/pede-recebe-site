import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconCheck } from "@/components/ui/icons";

const SCORES = [
  { name: "Pede&Recebe", shortName: "P&R",      score: 14, total: 14, destaque: true },
  { name: "Saipos",      shortName: "Saipos",   score: 7,  total: 14, destaque: false },
  { name: "Anota AI",    shortName: "Anota AI", score: 5,  total: 14, destaque: false, note: "via iFood" },
];

const EXCLUSIVOS = [
  "API Oficial WhatsApp — sem risco de bloqueio",
  "Gestão de entregas e entregadores",
  "Programa de fidelidade nativo",
  "Cupons de desconto integrados",
  "Controle de estoque com alertas",
];

export default function Comparativo() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-28">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amarelo/12 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 -left-16 w-60 h-60 rounded-full bg-amarelo/8 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-amarelo/35 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-amarelo/25 pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Comparativo</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight">
            A escolha é clara
          </h2>
          <p className="text-preto/70 text-base mt-3">
            14 recursos avaliados. Veja quem entrega mais.
          </p>
        </div>

        {/* Score cards */}
        <div className="reveal grid grid-cols-3 gap-3 sm:gap-5 mb-8">
          {SCORES.map((s) => {
            const pct = Math.round((s.score / s.total) * 100);
            return (
              <div
                key={s.name}
                className={`rounded-2xl p-4 sm:p-7 text-center border-2 card-hover ${
                  s.destaque
                    ? "bg-amarelo border-amarelo glow-amarelo shadow-[0_8px_40px_rgba(245,196,0,0.25)] relative z-10 scale-[1.04]"
                    : "bg-white border-preto"
                }`}
              >
                {s.destaque && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-preto text-amarelo text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Melhor opção
                  </span>
                )}
                <div className={`font-condensed text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 leading-tight ${s.destaque ? "text-preto/60" : "text-preto/40"}`}>
                  <span className="sm:hidden">{s.shortName}</span>
                  <span className="hidden sm:inline">{s.name}</span>
                </div>
                <div className={`font-condensed text-3xl sm:text-5xl font-bold leading-none ${s.destaque ? "text-preto" : "text-preto/70"}`}>
                  {s.score}
                  <span className={`text-base sm:text-xl font-normal ${s.destaque ? "text-preto/50" : "text-preto/35"}`}>/{s.total}</span>
                </div>
                <div className={`text-[10px] sm:text-xs mt-1.5 sm:mt-2 font-medium ${s.destaque ? "text-preto/70" : "text-preto/40"}`}>
                  {pct}%
                  <span className="hidden sm:inline"> dos recursos</span>
                </div>
                {s.note && (
                  <div className="text-[9px] sm:text-[10px] text-preto/35 mt-1 sm:mt-1.5 italic">{s.note}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Exclusivos */}
        <div className="reveal bg-preto rounded-2xl p-6 sm:p-8">
          <div className="text-amarelo font-bold text-sm uppercase tracking-wider mb-5">
            Só o Pede&amp;Recebe oferece
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {EXCLUSIVOS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amarelo border-2 border-preto flex items-center justify-center shrink-0">
                  <IconCheck size={10} color="#1A1209" />
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-preto/35 text-xs text-center mt-4">
          Baseado em informações públicas dos fornecedores. Jun/2025
        </p>

        <SectionCTA
          texto="Sem iFood, sem bloqueio, sem compromisso."
          botao="Começar com o Pede&Recebe"
        />
      </div>
    </section>
  );
}
