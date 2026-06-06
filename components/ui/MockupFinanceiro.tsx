const PAGAMENTOS = [
  { label: "Pix",     valor: "R$ 1.842,30", pct: 72, cor: "#F5C400" },
  { label: "Cartão",  valor: "R$ 540,60",   pct: 21, cor: "#22C55E" },
  { label: "Dinheiro",valor: "R$ 178,40",   pct: 7,  cor: "#888" },
];

const TRANSACOES = [
  { nome: "5518997530517", tipo: "Pix Online",    valor: "R$ 65,00",  hora: "11h" },
  { nome: "Pedro Xavier",  tipo: "Cartão Crédito", valor: "R$ 43,90", hora: "10h" },
  { nome: "5518988010754", tipo: "Pix Online",    valor: "R$ 29,90",  hora: "10h" },
];

export default function MockupFinanceiro({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#111] rounded-2xl border border-white/10 overflow-hidden ${className}`} aria-hidden="true">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div>
          <div className="text-white font-semibold text-sm">Financeiro</div>
          <div className="text-white/40 text-xs">Gestão de receitas e fluxo de caixa</div>
        </div>
        <div className="flex gap-1">
          {["Hoje","7 dias","30 dias"].map((t, i) => (
            <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg font-medium"
              style={i === 1 ? {backgroundColor:"rgba(245,196,0,0.15)",color:"#F5C400"} : {color:"rgba(255,255,255,0.3)"}}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* faturamento destaque */}
      <div className="px-5 py-4 border-b border-white/10" style={{background:"linear-gradient(135deg,rgba(245,196,0,0.08) 0%,transparent 60%)"}}>
        <div className="text-white/50 text-xs mb-1">Faturamento no Período</div>
        <div className="text-amarelo font-condensed text-4xl font-bold">R$ 2.561,30</div>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-verde text-xs font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            +18% vs período anterior
          </div>
          <div className="text-white/40 text-xs">42 pedidos · Ticket médio R$ 61,00</div>
        </div>
      </div>

      {/* breakdown pagamentos */}
      <div className="px-5 py-4 border-b border-white/10">
        <div className="text-white/40 text-xs mb-3 uppercase tracking-wider">Formas de pagamento</div>
        <div className="space-y-2.5">
          {PAGAMENTOS.map((p) => (
            <div key={p.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/70 text-xs">{p.label}</span>
                <span className="text-white text-xs font-semibold">{p.valor}</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${p.pct}%`, backgroundColor:p.cor}}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* transações recentes */}
      <div className="px-5 py-3">
        <div className="text-white/40 text-xs mb-2.5 uppercase tracking-wider">Transações recentes</div>
        <div className="space-y-2">
          {TRANSACOES.map((t, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amarelo/15 flex items-center justify-center text-xs font-bold text-amarelo shrink-0">
                  {t.nome[0]}
                </div>
                <div>
                  <div className="text-white text-xs font-medium truncate max-w-[120px]">{t.nome}</div>
                  <div className="text-white/30 text-[10px]">{t.tipo} · {t.hora}</div>
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
