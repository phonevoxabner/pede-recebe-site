const COLUNAS = [
  {
    titulo: "EM ANÁLISE",
    cor: "#c0392b",
    bg: "rgba(192,57,43,0.15)",
    pedidos: [
      { id: "#041", tipo: "Delivery", items: "Burguer Classic x2", tempo: "2 min", valor: "R$ 57,80" },
      { id: "#042", tipo: "Retirada", items: "Combo Master x1", tempo: "5 min", valor: "R$ 43,90" },
    ],
  },
  {
    titulo: "EM PRODUÇÃO",
    cor: "#d4a017",
    bg: "rgba(212,160,23,0.15)",
    pedidos: [
      { id: "#039", tipo: "Delivery", items: "Burguer Duplo x1, Coca x2", tempo: "12 min", valor: "R$ 51,70" },
    ],
  },
  {
    titulo: "PRONTOS",
    cor: "#1a9e4a",
    bg: "rgba(26,158,74,0.15)",
    pedidos: [
      { id: "#038", tipo: "Retirada", items: "Burguer Bacon x3", tempo: "18 min", valor: "R$ 89,70" },
    ],
  },
];

export default function MockupPedidos({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[#111111] rounded-2xl overflow-hidden border border-white/10 ${className}`}
      aria-hidden="true"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div>
          <div className="text-white font-semibold text-sm">Gestão de Pedidos</div>
          <div className="text-white/40 text-xs">3 pedidos ativos</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span className="text-white/30 text-xs">Buscar...</span>
          </div>
          <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Novo Pedido
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-5 py-2 border-b border-white/10">
        {["Todos", "Delivery", "Retirada", "Local"].map((tab, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={i === 0 ? { backgroundColor: "#F5C400", color: "#111" } : { color: "rgba(255,255,255,0.4)" }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {COLUNAS.map((col) => (
          <div key={col.titulo} className="rounded-xl overflow-hidden" style={{ backgroundColor: col.bg }}>
            <div className="flex items-center justify-between px-3 py-2.5">
              <span className="text-[10px] font-bold tracking-wider" style={{ color: col.cor }}>
                {col.titulo}
              </span>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: col.cor }}
              >
                {col.pedidos.length}
              </span>
            </div>
            <div className="px-2 pb-3 space-y-2">
              {col.pedidos.map((p) => (
                <div key={p.id} className="bg-[#1a1a1a] rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white font-bold text-xs">{p.id}</span>
                    <span
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={
                        p.tipo === "Delivery"
                          ? { backgroundColor: "rgba(245,196,0,0.15)", color: "#F5C400" }
                          : { backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                      }
                    >
                      {p.tipo}
                    </span>
                  </div>
                  <div className="text-white/50 text-[10px] leading-snug mb-2">{p.items}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/30 text-[9px]">{p.tempo} atrás</span>
                    <span className="text-white font-semibold text-[10px]">{p.valor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
