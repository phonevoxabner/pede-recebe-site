const CONVERSAS = [
  { nome: "5518997530517", tempo: "12h atrás", badge: 0, ativa: true },
  { nome: "5518988010754", tempo: "13h atrás", badge: 3, ativa: false },
  { nome: "Pedro Xavier",  tempo: "14h atrás", badge: 2, ativa: false },
  { nome: "5518996580171", tempo: "15h atrás", badge: 4, ativa: false },
];

const MSGS = [
  { lado: "bot",  texto: "Pedido confirmado! Delivery, Av. José Bonifácio, 904. Total: R$ 65,00. Pix gerado.", hora: "12h" },
  { lado: "user", texto: "Muito obrigado! Quando chega?", hora: "12h" },
  { lado: "bot",  texto: "Previsão: entre 21:21 e 22:11. Qualquer dúvida é só chamar!", hora: "12h" },
];

export default function MockupAtendimento({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(26,18,9,0.12),0_4px_16px_rgba(26,18,9,0.07)] flex-col ${className}`}
      aria-hidden="true"
      style={{ height: 340 }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="flex flex-1 overflow-hidden">
      {/* Sidebar — oculta em mobile */}
      <div className="hidden sm:flex w-52 border-r border-gray-100 flex-col shrink-0 bg-gray-50">
        <div className="px-3 py-3 border-b border-gray-100">
          <div className="text-preto font-semibold text-sm">Atendimento</div>
          <div className="text-preto/40 text-xs">Lead Management</div>
        </div>
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="bg-white rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 border border-gray-100">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span className="text-preto/30 text-[10px]">Procurar...</span>
          </div>
        </div>
        <div className="flex gap-1 px-3 py-1.5 border-b border-gray-100">
          <span className="text-[10px] bg-amarelo text-preto font-bold px-2 py-0.5 rounded-full">Pendente 7</span>
          <span className="text-[10px] text-preto/40 px-2 py-0.5">Atendendo 0</span>
        </div>
        <div className="flex-1 overflow-hidden">
          {CONVERSAS.map((c, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-50"
              style={c.ativa ? { backgroundColor: "rgba(245,196,0,0.12)" } : {}}>
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-preto/40 shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-preto text-[10px] font-medium truncate">{c.nome}</div>
                <div className="text-preto/30 text-[9px]">{c.tempo}</div>
              </div>
              {c.badge > 0 && (
                <span className="w-4 h-4 rounded-full bg-amarelo text-preto text-[9px] font-bold flex items-center justify-center shrink-0">
                  {c.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div>
            <div className="text-preto text-xs font-semibold">5518997530517</div>
            <div className="text-preto/40 text-[10px]">+5518997530517</div>
          </div>
          <div className="flex gap-1.5">
            <button className="text-[10px] border border-amarelo/50 text-preto/70 bg-amarelo/10 px-2.5 py-1 rounded-lg font-semibold">Fazer Pedido</button>
            <button className="text-[10px] border border-verde/40 text-verde px-2 py-1 rounded-lg font-semibold">Aceitar</button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-3 space-y-2.5 bg-[#FAFAF8]">
          {MSGS.map((m, i) => (
            <div key={i} className={`flex ${m.lado === "user" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[75%] rounded-2xl px-3 py-2 text-[10px] leading-relaxed"
                style={m.lado === "user"
                  ? { backgroundColor: "#F5C400", color: "#1A1209", borderBottomRightRadius: 4 }
                  : { backgroundColor: "#FFFFFF", color: "#1A1209", borderBottomLeftRadius: 4, border: "1px solid #E5E7EB" }}>
                {m.texto}
                <div className="text-[9px] opacity-40 mt-1 text-right">{m.hora}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-2.5 border-t border-gray-100 flex items-center gap-2 bg-white">
          <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2 text-[10px] text-preto/30 border border-gray-100">
            Responder cliente...
          </div>
          <div className="w-7 h-7 rounded-xl bg-amarelo flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1209" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
