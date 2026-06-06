const ITENS = [
  { nome: "Farinha de trigo",  cat: "Mercearia",   qtd: "12 kg",  validade: "Jan/26", status: "ok"     },
  { nome: "Cheddar fatiado",   cat: "Laticínios",  qtd: "2 kg",   validade: "Jun/25", status: "baixo"  },
  { nome: "Hambúrguer 150g",   cat: "Carnes",      qtd: "34 un",  validade: "Jul/25", status: "ok"     },
  { nome: "Bacon fatiado",     cat: "Carnes",      qtd: "1.5 kg", validade: "Jun/25", status: "vencendo"},
];

const STATUS_CONFIG: Record<string, { label: string; cor: string; bg: string }> = {
  ok:       { label: "Normal",   cor: "#22C55E", bg: "rgba(34,197,94,0.1)"  },
  baixo:    { label: "Baixo",    cor: "#F5C400", bg: "rgba(245,196,0,0.12)" },
  vencendo: { label: "Vencendo", cor: "#EF4444", bg: "rgba(239,68,68,0.1)"  },
};

export default function MockupEstoque({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#111] rounded-2xl border border-white/10 overflow-hidden ${className}`} aria-hidden="true">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div>
          <div className="text-white font-semibold text-sm">Gestão de Estoque</div>
          <div className="text-white/40 text-xs">Controle de Insumos</div>
        </div>
        <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo Item
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
        {[
          { label: "Total de itens", valor: "24", cor: "#F5C400" },
          { label: "Estoque baixo",  valor: "1",  cor: "#F5C400" },
          { label: "Vencendo logo",  valor: "1",  cor: "#EF4444" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="font-condensed text-2xl font-bold" style={{color:s.cor}}>{s.valor}</div>
            <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* filtro */}
      <div className="px-5 pt-3.5 pb-2 flex items-center gap-2">
        <span className="text-xs font-bold bg-amarelo text-preto px-3 py-1 rounded-full">Todos</span>
        <div className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="text-white/25 text-xs">Buscar insumo...</span>
        </div>
      </div>

      {/* tabela */}
      <div className="px-5 pb-4">
        <div className="grid grid-cols-4 text-[9px] text-white/25 uppercase tracking-wider pb-1.5 border-b border-white/5">
          <span>Insumo</span><span>Qtd. Atual</span><span>Validade</span><span>Status</span>
        </div>
        <div className="divide-y divide-white/5">
          {ITENS.map((item) => {
            const st = STATUS_CONFIG[item.status];
            return (
              <div key={item.nome} className="grid grid-cols-4 items-center py-2.5">
                <div>
                  <div className="text-white text-xs font-medium leading-snug">{item.nome}</div>
                  <div className="text-white/30 text-[10px]">{item.cat}</div>
                </div>
                <span className="text-white/70 text-xs">{item.qtd}</span>
                <span className="text-white/50 text-xs">{item.validade}</span>
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
