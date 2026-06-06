const STATS = [
  { value: "+500", label: "restaurantes ativos" },
  { value: "0", label: "números bloqueados" },
  { value: "14 dias", label: "grátis para testar" },
  { value: "10 min", label: "para começar a vender" },
];

export default function StatsBar() {
  return (
    <section className="bg-amarelo py-8" aria-label="Números do produto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-condensed text-3xl sm:text-4xl font-bold text-preto leading-none">
                {stat.value}
              </div>
              <div className="text-preto/60 text-sm font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
