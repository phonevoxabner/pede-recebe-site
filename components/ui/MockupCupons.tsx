const CUPONS = [
  { codigo: "BEMVINDO10", desconto: "10% off",      tipo: "Porcentagem", usos: "34/100", status: "ativo"   },
  { codigo: "FRETE0",     desconto: "Frete grátis", tipo: "Frete",       usos: "12/50",  status: "ativo"   },
  { codigo: "VOLTA20",    desconto: "R$ 20,00 off", tipo: "Valor fixo",  usos: "8/30",   status: "pausado" },
];

export default function MockupCupons({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div>
          <div className="text-preto font-semibold text-sm">Cupons</div>
          <div className="text-preto/40 text-xs">Gestão de Descontos</div>
        </div>
        <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo cupom
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
        {[
          { label: "Criados", valor: "3"  },
          { label: "Ativos",  valor: "2"  },
          { label: "Usos",    valor: "54" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="text-preto font-condensed text-2xl font-bold">{s.valor}</div>
            <div className="text-preto/40 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-3">
        {CUPONS.map((c) => (
          <div key={c.codigo} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-amarelo/15 border border-amarelo/30 border-dashed rounded-lg px-3 py-2">
                  <span className="font-mono text-xs font-bold text-preto tracking-widest">{c.codigo}</span>
                </div>
                <div>
                  <div className="text-preto font-semibold text-sm">{c.desconto}</div>
                  <div className="text-preto/40 text-xs mt-0.5">{c.tipo} · {c.usos} usos</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                style={c.status === "ativo"
                  ? {color:"#1a9e4a", backgroundColor:"#EDFBF3"}
                  : {color:"#9CA3AF", backgroundColor:"#F3F4F6"}}>
                {c.status === "ativo" ? "Ativo" : "Pausado"}
              </span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-preto/35 mb-1">
                <span>Progresso</span><span>{c.usos}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
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
