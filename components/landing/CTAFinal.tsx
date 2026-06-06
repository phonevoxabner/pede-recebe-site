import { IconArrowRight } from "@/components/ui/icons";

export default function CTAFinal() {
  return (
    <section className="relative py-24 lg:py-32 bg-amarelo overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-preto/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-preto/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="reveal relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-preto/60 text-sm font-semibold uppercase tracking-widest mb-4">
          Não espere o problema acontecer
        </p>
        <h2 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-bold text-preto leading-none mb-6">
          Seu concorrente já pode
          <br />
          estar usando isso.
        </h2>
        <p className="text-preto/60 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          14 dias grátis, sem cartão, sem burocracia. Comece agora e veja a
          diferença em pedidos ainda essa semana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contato"
            className="inline-flex items-center justify-center gap-2 bg-preto text-amarelo font-semibold text-lg px-10 py-4 rounded-xl hover:bg-cinza-escuro transition-colors"
          >
            Testar 14 dias grátis
            <IconArrowRight size={20} />
          </a>
          <a
            href="/#contato"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-preto font-semibold text-lg px-10 py-4 rounded-xl border-2 border-preto/30 hover:border-preto hover:bg-preto/5 transition-colors"
          >
            Falar com um especialista
          </a>
        </div>
        <p className="mt-6 text-preto/40 text-sm">
          Sem cartão de crédito. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
