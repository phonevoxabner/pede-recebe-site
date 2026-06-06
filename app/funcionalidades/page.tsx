import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAFinal from "@/components/landing/CTAFinal";
import MockupPedidos from "@/components/ui/MockupPedidos";
import MockupAtendimento from "@/components/ui/MockupAtendimento";
import {
  IconTrendingUp,
  IconCreditCard,
  IconMonitor,
  IconCheck,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Funcionalidades — Pede&Recebe",
  description:
    "Cardápio digital, painel de pedidos, pagamento online, relatórios e muito mais.",
};

const EXTRAS = [
  {
    icon: IconCreditCard,
    titulo: "Pagamento Online",
    descricao: "Aceite Pix, cartão de crédito e débito direto pelo WhatsApp.",
    items: ["Integração com principais gateways", "Conciliação automática", "Reduz inadimplência"],
  },
  {
    icon: IconTrendingUp,
    titulo: "Relatórios",
    descricao: "Veja o que vende mais, horários de pico e ticket médio.",
    items: ["Relatórios diários e mensais", "Export para Excel", "Compare períodos"],
  },
  {
    icon: IconMonitor,
    titulo: "Multi-dispositivo",
    descricao: "Celular, tablet, computador — tudo ao mesmo tempo.",
    items: ["100% no navegador", "Chrome, Safari, Firefox", "Múltiplos atendentes"],
  },
];

function MockupCardapio() {
  const produtos = [
    { nome: "Burguer Bacon", desc: "Pão, alface, tomate, bacon, cheddar", preco: "R$ 29,90", cor: "#c8956c" },
    { nome: "Burguer Classic", desc: "Cebola caramelizada, cheddar, 150g", preco: "R$ 28,90", cor: "#b07040" },
    { nome: "Burguer Duplo", desc: "2 hambúrgueres 100g, picles, cheddar", preco: "R$ 33,90", cor: "#7a4a2a" },
    { nome: "Combo Master", desc: "Burguer + batata frita + bebida", preco: "R$ 48,90", cor: "#5a3520" },
  ];
  return (
    <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-xl border border-black/5" aria-hidden="true">
      {/* Header */}
      <div className="bg-[#D96C4B] px-5 py-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white border-2 border-white/80 flex items-center justify-center text-xl shadow">
          🍔
        </div>
        <div className="flex-1">
          <div className="text-white font-bold text-base leading-tight">Abner Delivery</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-[#22C55E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Aberto</span>
            <span className="text-white/80 text-xs">30-45 min</span>
            <span className="text-white/60 text-xs">·</span>
            <span className="text-white/80 text-xs">Min. R$ 30,00</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="2"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      {/* Search */}
      <div className="px-4 pt-3 pb-2 bg-white">
        <div className="flex items-center gap-2 bg-[#f0f0f0] rounded-xl px-4 py-2.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="text-[#aaa] text-sm">Buscar no cardápio...</span>
        </div>
      </div>
      {/* Categories */}
      <div className="px-4 pb-3 bg-white border-b border-gray-100 flex gap-2">
        {["Todos", "Hambúrgueres", "Bebidas", "Combos", "Sobremesas"].map((c, i) => (
          <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
            style={i === 0 ? {backgroundColor:"#D96C4B",color:"white"} : {backgroundColor:"#f0f0f0",color:"#777"}}>
            {c}
          </span>
        ))}
      </div>
      {/* Products */}
      <div className="bg-white divide-y divide-gray-100">
        {produtos.map((p, i) => (
          <div key={i} className="flex items-center gap-4 px-4 py-3.5">
            <div className="flex-1">
              <div className="text-[#111] text-sm font-semibold">{p.nome}</div>
              <div className="text-[#999] text-xs mt-0.5">{p.desc}</div>
              <div className="text-[#D96C4B] text-sm font-bold mt-1">{p.preco}</div>
            </div>
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-xl" style={{backgroundColor:p.cor}} />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#D96C4B] border-2 border-white flex items-center justify-center shadow">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FuncionalidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-cinza-escuro border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Funcionalidades</SectionLabel>
          <h1 className="font-condensed text-5xl sm:text-6xl font-bold text-white leading-none mt-2 mb-4">
            Tudo que seu restaurante
            <br />
            <span className="text-amarelo">precisa para vender mais</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Do cardápio ao pagamento, do pedido à entrega. Uma plataforma
            completa que funciona no navegador, sem instalar nada.
          </p>
        </div>
      </section>

      {/* Cardápio Digital */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal">
              <SectionLabel>Cardápio Digital</SectionLabel>
              <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
                Seu cardápio no celular
                <br />
                <span className="text-amarelo">do cliente</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Monte o cardápio com fotos, descrições, variações e preços.
                Compartilhe o link no Instagram, nos stories ou na entrada do
                restaurante. O cliente abre, escolhe e pede — tudo pelo celular.
              </p>
              <ul className="space-y-3">
                {["Categorias e destaques personalizáveis","Complementos e observações por item","Disponível 24h, atualiza em tempo real","Sem app para baixar — abre no navegador"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className="w-5 h-5 rounded-full bg-verde/15 flex items-center justify-center shrink-0">
                      <IconCheck size={11} color="#22C55E" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal lg:pl-8">
              <MockupCardapio />
            </div>
          </div>
        </div>
      </section>

      {/* Painel de Pedidos */}
      <section className="py-20 lg:py-28 bg-cinza-escuro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <MockupPedidos />
            </div>
            <div className="reveal order-1 lg:order-2">
              <SectionLabel>Painel de Pedidos</SectionLabel>
              <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
                Todos os pedidos
                <br />
                <span className="text-amarelo">em um lugar só</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Os pedidos chegam organizados em colunas: Em Análise, Em
                Produção, Prontos para Entrega. Você enxerga tudo de uma vez,
                em qualquer dispositivo.
              </p>
              <ul className="space-y-3">
                {["Kanban visual por status do pedido","Notificação instantânea de novos pedidos","Funciona no celular, tablet e computador","Múltiplos atendentes simultâneos"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className="w-5 h-5 rounded-full bg-verde/15 flex items-center justify-center shrink-0">
                      <IconCheck size={11} color="#22C55E" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal">
              <SectionLabel>Atendimento</SectionLabel>
              <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
                Todas as conversas
                <br />
                <span className="text-amarelo">centralizadas</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Gerencie todas as conversas do WhatsApp em um único painel.
                Histórico completo por cliente, múltiplos atendentes no mesmo
                número, resposta direta sem sair do sistema.
              </p>
              <ul className="space-y-3">
                {["Histórico completo por cliente","Múltiplos atendentes no mesmo número","Fazer pedido direto pelo painel","Transferência entre atendentes"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className="w-5 h-5 rounded-full bg-verde/15 flex items-center justify-center shrink-0">
                      <IconCheck size={11} color="#22C55E" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <MockupAtendimento />
            </div>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 lg:py-20 bg-cinza-escuro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="font-condensed text-3xl sm:text-4xl font-bold text-white">
              E mais no mesmo plano
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXTRAS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="reveal bg-preto border border-white/10 hover:border-amarelo/30 rounded-2xl p-6 transition-colors"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-amarelo/10 flex items-center justify-center mb-4">
                    <Icon size={22} color="#F5C400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 font-condensed">{item.titulo}</h3>
                  <p className="text-white/50 text-sm mb-4">{item.descricao}</p>
                  <ul className="space-y-2">
                    {item.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-white/40 text-xs">
                        <div className="w-1 h-1 rounded-full bg-amarelo/60 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
