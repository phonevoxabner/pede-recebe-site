import { IconArrowRight } from "@/components/ui/icons";

interface SectionCTAProps {
  texto?: string;
  botao?: string;
  href?: string;
  onYellow?: boolean;
}

export default function SectionCTA({
  texto = "Pronto para começar?",
  botao = "Testar grátis por 14 dias",
  href = "/#contato",
  onYellow = false,
}: SectionCTAProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 mt-4 ${
      onYellow ? "border-t border-preto/15" : "border-t border-preto/10"
    }`}>
      <p className={`text-sm font-medium ${onYellow ? "text-preto/75" : "text-preto/70"}`}>{texto}</p>
      <a
        href={href}
        className={`cta-pulse inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2 border-preto transition-colors shrink-0 ${
          onYellow
            ? "bg-preto text-amarelo hover:bg-preto/80"
            : "bg-amarelo text-preto hover:bg-amarelo-claro"
        }`}
      >
        {botao}
        <IconArrowRight size={15} />
      </a>
    </div>
  );
}
