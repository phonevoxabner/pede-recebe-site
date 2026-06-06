const PAGAMENTOS = [
  { label: "Pix",      valor: "R$ 1.842,30", pct: 72, cor: "#F5C400" },
  { label: "Cartão",   valor: "R$ 540,60",   pct: 21, cor: "#1A1209" },
  { label: "Dinheiro", valor: "R$ 178,40",   pct: 7,  cor: "#9CA3AF" },
];

const TRANSACOES = [
  { nome: "5518997530517", tipo: "Pix Online",     valor: "R$ 65,00", hora: "11h" },
  { nome: "Pedro Xavier",  tipo: "Cartão Crédito", valor: "R$ 43,90", hora: "10h" },
  { nome: "5518988010754", tipo: "Pix Online",     valor: "R$ 29,90", hora: "10h" },
];

export default function MockupFinanceiro({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div>
          <div className="text-preto font-semibold text-sm">Financeiro</div>
          <div className="text-preto/40 text-xs">Gestão de receitas</div>
        </div>
        <div className="flex gap-1">
          {["Hoje","7 dias","30 dias"].map((t, i) => (
            <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg font-semibold"
              style={i === 1 ? {backgroundColor:"#F5C400",color:"#1A1209"} : {color:"rgba(26,18,9,0.35)",backgroundColor:"#F9F9F7"}}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* faturamento */}
      <div className="px-5 py-4 border-b border-gray-100 bg-amarelo/5">
        <div className="text-preto/50 text-xs mb-1">Faturamento no Período</div>
        <div className="text-preto font-condensed text-4xl font-bold">R$ 2.561,30</div>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-verde text-xs font-semibold">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            +18% vs período anterior
          </div>
          <div className="text-preto/40 text-xs">42 pedidos · Ticket R$ 61</div>
        </div>
      </div>

      {/* breakdown */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="text-preto/40 text-xs mb-3 uppercase tracking-wider">Formas de pagamento</div>
        <div className="space-y-2.5">
          {PAGAMENTOS.map((p) => (
            <div key={p.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-preto/70 text-xs">{p.label}</span>
                <span className="text-preto text-xs font-semibold">{p.valor}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${p.pct}%`, backgroundColor:p.cor}}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* transações */}
      <div className="px-5 py-3">
        <div className="text-preto/40 text-xs mb-2.5 uppercase tracking-wider">Transações recentes</div>
        <div className="space-y-2">
          {TRANSACOES.map((t, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amarelo flex items-center justify-center text-xs font-bold text-preto shrink-0">
                  {t.nome[0]}
                </div>
                <div>
                  <div className="text-preto text-xs font-medium truncate max-w-[110px]">{t.nome}</div>
                  <div className="text-preto/35 text-[10px]">{t.tipo} · {t.hora}</div>
                </div>
              </div>
              <span className="text-verde text-xs font-semibold">{t.valor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
