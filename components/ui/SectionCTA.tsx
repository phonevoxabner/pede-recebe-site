import { IconArrowRight } from "@/components/ui/icons";

interface SectionCTAProps {
  texto?: string;
  botao?: string;
  href?: string;
}

export default function SectionCTA({
  texto = "Pronto para começar?",
  botao = "Testar grátis por 14 dias",
  href = "/#contato",
}: SectionCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 mt-4 border-t border-white/8">
      <p className="text-white/50 text-sm">{texto}</p>
      <a
        href={href}
        className="inline-flex items-center gap-2 bg-amarelo text-preto font-semibold text-sm px-6 py-3 rounded-xl hover:bg-amarelo-claro transition-colors shrink-0"
      >
        {botao}
        <IconArrowRight size={15} />
      </a>
    </div>
  );
}
