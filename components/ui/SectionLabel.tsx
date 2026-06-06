interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-amarelo text-xs font-semibold uppercase tracking-widest mb-3 ${className}`}
    >
      {children}
    </span>
  );
}
