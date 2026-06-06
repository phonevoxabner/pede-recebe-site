interface SectionLabelProps {
  children: string;
  className?: string;
  onYellow?: boolean;
}

export default function SectionLabel({ children, className = "", onYellow = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
        onYellow
          ? "bg-preto/10 text-preto"
          : "bg-amarelo text-preto"
      } ${className}`}
    >
      {children}
    </span>
  );
}
