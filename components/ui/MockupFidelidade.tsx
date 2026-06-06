const RECOMPENSAS = [
  { nome: "Sobremesa grátis", pontos: "500 pts",  resgates: 12 },
  { nome: "10% de desconto",  pontos: "300 pts",  resgates: 28 },
  { nome: "Frete grátis",     pontos: "150 pts",  resgates: 41 },
];

export default function MockupFidelidade({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#111] rounded-2xl border border-white/10 overflow-hidden ${className}`} aria-hidden="true">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div>
          <div className="text-white font-semibold text-sm">Fidelidade</div>
          <div className="text-white/40 text-xs">Gestão de Prêmios e Pontos</div>
        </div>
        <span className="flex items-center gap-1.5 text-verde text-xs font-bold bg-verde/10 border border-verde/20 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-verde"/>
          Programa ativo
        </span>
      </div>

      {/* stats */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
        {[
          { label: "Clientes no programa", valor: "284" },
          { label: "Pontos distribuídos",  valor: "47.2k" },
          { label: "Prêmios resgatados",   valor: "81" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="text-amarelo font-condensed text-2xl font-bold">{s.valor}</div>
            <div className="text-white/40 text-[10px] mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* config */}
      <div className="px-5 py-3.5 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-white text-sm font-semibold">Pontos por R$ 1,00 gasto</div>
            <div className="text-white/40 text-xs mt-0.5">Clientes acumulam a cada pedido</div>
          </div>
        </div>
        <div className="flex gap-2">
          {["1 pt","2 pts","5 pts","10 pts"].map((p, i) => (
            <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg border"
              style={i === 3
                ? {backgroundColor:"rgba(245,196,0,0.2)",color:"#F5C400",borderColor:"rgba(245,196,0,0.4)"}
                : {backgroundColor:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.4)",borderColor:"rgba(255,255,255,0.08)"}}>
              {p}
            </span>
          ))}
        </div>
        <div className="mt-3 bg-cinza-medio rounded-xl px-4 py-2.5 flex items-center justify-between">
          <span className="text-white/50 text-xs">Pedido de R$ 80,00 gera</span>
          <span className="text-amarelo font-bold text-sm">800 pontos</span>
        </div>
      </div>

      {/* recompensas */}
      <div className="px-5 py-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-white/40 text-xs uppercase tracking-wider">Recompensas ativas</div>
          <button className="text-amarelo text-xs font-semibold border border-amarelo/30 px-2.5 py-1 rounded-lg">
            + Adicionar
          </button>
        </div>
        <div className="space-y-2">
          {RECOMPENSAS.map((r) => (
            <div key={r.nome} className="flex items-center justify-between bg-[#1a1a1a] rounded-xl px-4 py-2.5 border border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amarelo/15 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="2">
                    <polyline points="20 12 20 22 4 22 4 12"/>
                    <rect x="2" y="7" width="20" height="5"/>
                    <line x1="12" y1="22" x2="12" y2="7"/>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{r.nome}</div>
                  <div className="text-white/30 text-[10px]">{r.resgates} resgates</div>
                </div>
              </div>
              <span className="text-amarelo text-xs font-bold">{r.pontos}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
