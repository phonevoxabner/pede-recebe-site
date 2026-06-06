const CUPONS = [
  { codigo: "BEMVINDO10", desconto: "10% off",        tipo: "Porcentagem", usos: "34/100", status: "ativo"    },
  { codigo: "FRETE0",     desconto: "Frete grátis",   tipo: "Frete",       usos: "12/50",  status: "ativo"    },
  { codigo: "VOLTA20",    desconto: "R$ 20,00 off",   tipo: "Valor fixo",  usos: "8/30",   status: "pausado"  },
];

export default function MockupCupons({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#111] rounded-2xl border border-white/10 overflow-hidden ${className}`} aria-hidden="true">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div>
          <div className="text-white font-semibold text-sm">Cupons</div>
          <div className="text-white/40 text-xs">Gestão de Descontos</div>
        </div>
        <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo cupom
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
        {[
          { label: "Cupons criados", valor: "3"  },
          { label: "Cupons ativos",  valor: "2"  },
          { label: "Usos este mês",  valor: "54" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="text-amarelo font-condensed text-2xl font-bold">{s.valor}</div>
            <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* lista */}
      <div className="p-4 space-y-2.5">
        {CUPONS.map((c) => (
          <div key={c.codigo} className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-cinza-medio border border-dashed border-white/20 rounded-lg px-3 py-2">
                  <span className="text-amarelo font-mono text-xs font-bold tracking-widest">{c.codigo}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{c.desconto}</div>
                  <div className="text-white/40 text-xs mt-0.5">{c.tipo} · {c.usos} usos</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                style={c.status === "ativo"
                  ? {color:"#22C55E",backgroundColor:"rgba(34,197,94,0.1)"}
                  : {color:"#888",backgroundColor:"rgba(136,136,136,0.1)"}}>
                {c.status === "ativo" ? "Ativo" : "Pausado"}
              </span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-white/30 mb-1">
                <span>Progresso de uso</span>
                <span>{c.usos}</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-amarelo rounded-full"
                  style={{width:`${(parseInt(c.usos)/parseInt(c.usos.split("/")[1]))*100}%`}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
