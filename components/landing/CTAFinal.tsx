import { IconArrowRight } from "@/components/ui/icons";

export default function CTAFinal() {
  return (
    <section className="relative py-24 lg:py-32 bg-preto overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amarelo/8 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amarelo/8 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amarelo/4 pointer-events-none" aria-hidden="true" />

      <div className="reveal relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-[11px] font-bold text-amarelo bg-amarelo/15 border border-amarelo/25 uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Não espere o problema acontecer
        </span>
        <h2 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-6">
          Seu concorrente já pode
          <br />
          <span className="text-amarelo">estar usando isso.</span>
        </h2>
        <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          14 dias grátis, sem cartão, sem burocracia. Comece agora e veja a
          diferença em pedidos ainda essa semana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contato"
            className="cta-pulse inline-flex items-center justify-center gap-2 bg-amarelo text-preto font-bold text-lg px-10 py-4 rounded-xl border-2 border-amarelo hover:bg-amarelo-claro transition-colors"
          >
            Testar 14 dias grátis
            <IconArrowRight size={20} />
          </a>
          <a
            href="/#contato"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold text-lg px-10 py-4 rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors"
          >
            Falar com um especialista
          </a>
        </div>
        <p className="mt-6 text-white/30 text-sm">Sem cartão de crédito. Cancele quando quiser.</p>
      </div>
    </section>
  );
}
