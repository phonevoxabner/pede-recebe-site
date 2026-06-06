const COLUNAS = [
  {
    titulo: "EM ANÁLISE",
    cor: "#c0392b",
    bg: "#FFF0EE",
    border: "#FACCB8",
    pedidos: [
      { id: "#041", tipo: "Delivery", items: "Burguer Classic x2", tempo: "2 min", valor: "R$ 57,80" },
      { id: "#042", tipo: "Retirada", items: "Combo Master x1",    tempo: "5 min", valor: "R$ 43,90" },
    ],
  },
  {
    titulo: "EM PRODUÇÃO",
    cor: "#B8860B",
    bg: "#FFFBEA",
    border: "#F5E088",
    pedidos: [
      { id: "#039", tipo: "Delivery", items: "Burguer Duplo x1, Coca x2", tempo: "12 min", valor: "R$ 51,70" },
    ],
  },
  {
    titulo: "PRONTOS",
    cor: "#1a9e4a",
    bg: "#EDFBF3",
    border: "#A8E6C0",
    pedidos: [
      { id: "#038", tipo: "Retirada", items: "Burguer Bacon x3", tempo: "18 min", valor: "R$ 89,70" },
    ],
  },
];

const TODOS = COLUNAS.flatMap((col) =>
  col.pedidos.map((p) => ({ ...p, status: col.titulo, statusCor: col.cor, statusBg: col.bg }))
);

function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-white">
      <div>
        <div className="text-preto font-semibold text-sm">Gestão de Pedidos</div>
        <div className="text-preto/40 text-xs">4 pedidos ativos</div>
      </div>
      <div className="bg-amarelo text-preto text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Novo Pedido
      </div>
    </div>
  );
}

export default function MockupPedidos({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] ${className}`} aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <Header />

      {/* Mobile: lista vertical */}
      <div className="sm:hidden">
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
          {COLUNAS.map((col) => (
            <div key={col.titulo} className="py-2.5 text-center">
              <div className="font-condensed text-lg font-bold" style={{ color: col.cor }}>{col.pedidos.length}</div>
              <div className="text-[9px] font-semibold text-preto/40 leading-tight mt-0.5">{col.titulo}</div>
            </div>
          ))}
        </div>
        <div className="divide-y divide-gray-100">
          {TODOS.map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: p.statusCor, minHeight: 40 }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-preto font-bold text-sm">{p.id}</span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ color: p.statusCor, backgroundColor: p.statusBg }}>{p.status}</span>
                </div>
                <div className="text-preto/55 text-xs truncate">{p.items}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded text-preto/40 bg-gray-100">{p.tipo}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-preto/30 text-[10px]">{p.tempo} atrás</span>
                    <span className="text-preto font-semibold text-xs">{p.valor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: kanban */}
      <div className="hidden sm:block">
        <div className="flex gap-1 px-5 py-2 border-b border-gray-100 bg-gray-50">
          {["Todos","Delivery","Retirada","Local"].map((tab, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full font-semibold"
              style={i === 0 ? { backgroundColor:"#F5C400", color:"#1A1209" } : { color:"rgba(26,18,9,0.4)" }}>
              {tab}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {COLUNAS.map((col) => (
            <div key={col.titulo} className="rounded-xl overflow-hidden border" style={{ backgroundColor: col.bg, borderColor: col.border }}>
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] font-bold tracking-wider" style={{ color: col.cor }}>{col.titulo}</span>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: col.cor }}>
                  {col.pedidos.length}
                </span>
              </div>
              <div className="px-2 pb-3 space-y-2">
                {col.pedidos.map((p) => (
                  <div key={p.id} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-preto font-bold text-xs">{p.id}</span>
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-amarelo/15 text-preto/60">{p.tipo}</span>
                    </div>
                    <div className="text-preto/55 text-[10px] leading-snug mb-2">{p.items}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-preto/35 text-[9px]">{p.tempo} atrás</span>
                      <span className="text-preto font-semibold text-[10px]">{p.valor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
