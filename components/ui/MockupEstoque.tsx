const ITENS = [
  { nome: "Farinha de trigo",  cat: "Mercearia",  qtd: "12 kg",  validade: "Jan/26", status: "ok"      },
  { nome: "Cheddar fatiado",   cat: "Laticínios", qtd: "2 kg",   validade: "Jun/25", status: "baixo"   },
  { nome: "Hambúrguer 150g",   cat: "Carnes",     qtd: "34 un",  validade: "Jul/25", status: "ok"      },
  { nome: "Bacon fatiado",     cat: "Carnes",     qtd: "1.5 kg", validade: "Jun/25", status: "vencendo"},
];

const STATUS_CONFIG: Record<string, { label: string; cor: string; bg: string }> = {
  ok:       { label: "Normal",   cor: "#1a9e4a", bg: "#EDFBF3" },
  baixo:    { label: "Baixo",    cor: "#B8860B", bg: "#FFFBEA" },
  vencendo: { label: "Vencendo", cor: "#c0392b", bg: "#FFF0EE" },
};

export default function MockupEstoque({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div>
          <div className="text-preto font-semibold text-sm">Gestão de Estoque</div>
          <div className="text-preto/40 text-xs">Controle de Insumos</div>
        </div>
        <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo Item
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
        {[
          { label: "Total",         valor: "24", cor: "#1A1209" },
          { label: "Est. baixo",    valor: "1",  cor: "#B8860B" },
          { label: "Vencendo logo", valor: "1",  cor: "#c0392b" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="font-condensed text-2xl font-bold" style={{color:s.cor}}>{s.valor}</div>
            <div className="text-preto/40 text-[10px] mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pt-3.5 pb-2 flex items-center gap-2 border-b border-gray-100">
        <span className="text-xs font-bold bg-amarelo text-preto px-3 py-1 rounded-full">Todos</span>
        <div className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="text-preto/30 text-xs">Buscar insumo...</span>
        </div>
      </div>

      <div className="px-5 pb-4">
        <div className="grid grid-cols-4 text-[9px] text-preto/30 uppercase tracking-wider py-1.5 border-b border-gray-100">
          <span>Insumo</span><span>Qtd.</span><span>Validade</span><span>Status</span>
        </div>
        <div className="divide-y divide-gray-50">
          {ITENS.map((item) => {
            const st = STATUS_CONFIG[item.status];
            return (
              <div key={item.nome} className="grid grid-cols-4 items-center py-2.5">
                <div>
                  <div className="text-preto text-xs font-medium">{item.nome}</div>
                  <div className="text-preto/35 text-[10px]">{item.cat}</div>
                </div>
                <span className="text-preto/65 text-xs">{item.qtd}</span>
                <span className="text-preto/50 text-xs">{item.validade}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit"
                  style={{color:st.cor, backgroundColor:st.bg}}>
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
