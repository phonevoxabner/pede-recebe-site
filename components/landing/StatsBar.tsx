const STATS = [
  { value: "+500",    label: "restaurantes ativos"      },
  { value: "+180k",   label: "pedidos processados"       },
  { value: "14 dias", label: "grátis para testar"        },
  { value: "10 min",  label: "para começar a vender"     },
];

export default function StatsBar() {
  return (
    <section className="bg-amarelo border-y-2 border-preto/10 shadow-[0_2px_12px_rgba(26,18,9,0.06)]" aria-label="Números do produto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-preto/15">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={`text-center py-10 px-6 ${i < 2 ? "border-b md:border-b-0 border-preto/15" : ""} ${i % 2 !== 0 ? "border-l border-preto/15 md:border-l-0" : ""}`}
            >
              <div className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-none">
                {stat.value}
              </div>
              <div className="text-preto/70 text-sm font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
