const ENTREGADORES = [
  { nome: "Carlos Motoboy",   veiculo: "Moto · 11987654321", entregas: 8,  avaliacao: "4.9", status: "disponivel" },
  { nome: "Abner Entregador", veiculo: "Moto · 11976543210", entregas: 3,  avaliacao: "5.0", status: "em_rota"    },
  { nome: "Rafael Silva",     veiculo: "Bike · 11965432109", entregas: 12, avaliacao: "4.7", status: "offline"    },
];

const STATUS_CONFIG: Record<string, { label: string; cor: string; bg: string }> = {
  disponivel: { label: "Disponível", cor: "#1a9e4a", bg: "#EDFBF3"  },
  em_rota:    { label: "Em rota",    cor: "#B8860B", bg: "#FFFBEA"  },
  offline:    { label: "Offline",    cor: "#9CA3AF", bg: "#F3F4F6"  },
};

export default function MockupEntregas({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div>
          <div className="text-preto font-semibold text-sm">Entregas</div>
          <div className="text-preto/40 text-xs">Gestão de Entregadores</div>
        </div>
        <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Adicionar
        </div>
      </div>

      <div className="flex gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
        {[
          { label: "1 Disponível", cor: "#1a9e4a" },
          { label: "1 Em rota",    cor: "#B8860B" },
          { label: "1 Offline",    cor: "#9CA3AF" },
        ].map((s) => (
          <span key={s.label} className="flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1"
            style={{color:s.cor, borderColor:`${s.cor}40`, backgroundColor:`${s.cor}10`}}>
            <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:s.cor}}/>
            {s.label}
          </span>
        ))}
      </div>

      <div className="p-4 space-y-3">
        {ENTREGADORES.map((e) => {
          const st = STATUS_CONFIG[e.status];
          return (
            <div key={e.nome} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amarelo flex items-center justify-center text-sm font-bold text-preto">
                    {e.nome[0]}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white" style={{backgroundColor:st.cor}}/>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-preto font-semibold text-sm">{e.nome}</div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{color:st.cor, backgroundColor:st.bg}}>
                      {st.label}
                    </span>
                  </div>
                  <div className="text-preto/40 text-xs mt-0.5">{e.veiculo}</div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-preto/50 text-xs">{e.entregas} entregas</span>
                    <span className="flex items-center gap-1 text-amarelo text-xs font-bold">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#F5C400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                      {e.avaliacao}
                    </span>
                    {e.status === "disponivel" && (
                      <button className="ml-auto text-[10px] font-bold text-white bg-amarelo px-2.5 py-1 rounded-lg" style={{color:"#1A1209"}}>
                        Atribuir
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
