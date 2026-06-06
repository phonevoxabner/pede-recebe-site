const RECOMPENSAS = [
  { nome: "Sobremesa grátis", pontos: "500 pts", resgates: 12 },
  { nome: "10% de desconto",  pontos: "300 pts", resgates: 28 },
  { nome: "Frete grátis",     pontos: "150 pts", resgates: 41 },
];

export default function MockupFidelidade({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div>
          <div className="text-preto font-semibold text-sm">Fidelidade</div>
          <div className="text-preto/40 text-xs">Gestão de Prêmios e Pontos</div>
        </div>
        <span className="flex items-center gap-1.5 text-verde text-xs font-bold bg-verde/10 border border-verde/20 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-verde"/>
          Programa ativo
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
        {[
          { label: "Clientes", valor: "284" },
          { label: "Pontos dist.", valor: "47.2k" },
          { label: "Resgates", valor: "81" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="text-preto font-condensed text-2xl font-bold">{s.valor}</div>
            <div className="text-preto/40 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3.5 border-b border-gray-100">
        <div className="text-preto font-semibold text-sm mb-2">Pontos por R$ 1,00 gasto</div>
        <div className="flex gap-2 mb-3">
          {["1 pt","2 pts","5 pts","10 pts"].map((p, i) => (
            <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all"
              style={i === 3
                ? {backgroundColor:"#F5C400",color:"#1A1209",borderColor:"#F5C400"}
                : {backgroundColor:"#F9F9F7",color:"rgba(26,18,9,0.4)",borderColor:"#E5E7EB"}}>
              {p}
            </span>
          ))}
        </div>
        <div className="bg-amarelo/10 rounded-xl px-4 py-2.5 flex items-center justify-between border border-amarelo/20">
          <span className="text-preto/60 text-xs">Pedido de R$ 80,00 gera</span>
          <span className="text-preto font-bold text-sm">800 pontos</span>
        </div>
      </div>

      <div className="px-5 py-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-preto/40 text-xs uppercase tracking-wider">Recompensas ativas</div>
          <button className="text-preto text-xs font-bold border border-amarelo/50 bg-amarelo/10 px-2.5 py-1 rounded-lg">
            + Adicionar
          </button>
        </div>
        <div className="space-y-2">
          {RECOMPENSAS.map((r) => (
            <div key={r.nome} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amarelo flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1A1209" strokeWidth="2">
                    <polyline points="20 12 20 22 4 22 4 12"/>
                    <rect x="2" y="7" width="20" height="5"/>
                    <line x1="12" y1="22" x2="12" y2="7"/>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-preto text-xs font-semibold">{r.nome}</div>
                  <div className="text-preto/35 text-[10px]">{r.resgates} resgates</div>
                </div>
              </div>
              <span className="text-preto font-bold text-xs bg-amarelo border border-preto/30 px-2 py-0.5 rounded-full">{r.pontos}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
