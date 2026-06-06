import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import MockupPedidos from "@/components/ui/MockupPedidos";
import MockupAtendimento from "@/components/ui/MockupAtendimento";
import MockupFinanceiro from "@/components/ui/MockupFinanceiro";
import MockupEntregas from "@/components/ui/MockupEntregas";
import MockupFidelidade from "@/components/ui/MockupFidelidade";
import MockupCupons from "@/components/ui/MockupCupons";
import MockupEstoque from "@/components/ui/MockupEstoque";
import FoodPhoto from "@/components/ui/FoodPhoto";
import { IconCheck } from "@/components/ui/icons";

const PRODUTOS_CARDAPIO = [
  { nome: "Burguer Bacon",   desc: "Pão, alface, tomate, bacon, cheddar", preco: "R$ 29,90", tipo: "burger"        },
  { nome: "Burguer Classic", desc: "Cebola caramelizada, cheddar, 150g",  preco: "R$ 28,90", tipo: "burger"        },
  { nome: "Burguer Duplo",   desc: "2 hambúrgueres 100g, picles, cheddar",preco: "R$ 33,90", tipo: "burger-duplo"  },
  { nome: "Combo Master",    desc: "Burguer + batata frita + bebida",      preco: "R$ 48,90", tipo: "combo"         },
] as const;

function MockupCardapio() {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-xl border border-black/5" aria-hidden="true">
      {/* header restaurante */}
      <div className="bg-[#D96C4B] px-4 py-3.5 flex items-center gap-3">
        <FoodPhoto tipo="burger" size={44} className="rounded-full border-2 border-white shadow" />
        <div className="flex-1">
          <div className="text-white font-bold text-sm">Abner Delivery</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="bg-[#22C55E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Aberto</span>
            <span className="text-white/80 text-xs">30-45 min · Min. R$ 30</span>
          </div>
        </div>
      </div>
      {/* categorias */}
      <div className="px-4 py-2.5 bg-white border-b border-gray-100 flex gap-2">
        {["Todos","Hambúrgueres","Bebidas","Combos"].map((c,i)=>(
          <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
            style={i===0?{backgroundColor:"#D96C4B",color:"white"}:{backgroundColor:"#f0f0f0",color:"#777"}}>{c}</span>
        ))}
      </div>
      {/* produtos */}
      <div className="bg-white divide-y divide-gray-100">
        {PRODUTOS_CARDAPIO.map((p,i)=>(
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className="flex-1">
              <div className="text-[#111] text-sm font-semibold">{p.nome}</div>
              <div className="text-[#999] text-xs mt-0.5">{p.desc}</div>
              <div className="text-[#D96C4B] text-sm font-bold mt-1">{p.preco}</div>
            </div>
            <div className="relative shrink-0">
              <FoodPhoto tipo={p.tipo} size={56} />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#D96C4B] border-2 border-white flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
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

/* ── Bloco padrão: texto + mockup ── */
function Bloco({
  id,
  labelExtra,
  titulo,
  destaque,
  descricao,
  bullets,
  mockup,
  inverter = false,
  fundo = false,
}: {
  id?: string;
  labelExtra?: string;
  titulo: string;
  destaque: string;
  descricao: string;
  bullets: string[];
  mockup: React.ReactNode;
  inverter?: boolean;
  fundo?: boolean;
}) {
  return (
    <div id={id} className={`${fundo ? "bg-cinza-escuro" : ""} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${inverter ? "" : ""}`}>
          <div className={`reveal ${inverter ? "order-2 lg:order-1" : ""}`}>
            {mockup}
          </div>
          <div className={`reveal ${inverter ? "order-1 lg:order-2" : ""}`}>
            {labelExtra && (
              <span className="inline-block text-[10px] font-bold text-amarelo bg-amarelo/15 border border-amarelo/25 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                {labelExtra}
              </span>
            )}
            <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {titulo}
              <br />
              <span className="text-amarelo">{destaque}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">{descricao}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-5 h-5 rounded-full bg-verde/15 flex items-center justify-center shrink-0">
                    <IconCheck size={11} color="#22C55E" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="scroll-mt-16">

      {/* título da seção */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <SectionLabel>Funcionalidades</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight mt-1">
            Uma plataforma, oito módulos,
            <br />
            <span className="text-amarelo">zero dor de cabeça</span>
          </h2>
        </div>
      </div>

      {/* 1. Cardápio */}
      <Bloco
        id="func-cardapio"
        titulo="Cardápio digital"
        destaque="no celular do cliente"
        descricao="Monte o cardápio com categorias, fotos e variações. Compartilhe o link onde quiser — o cliente abre, escolhe e pede tudo pelo celular, sem baixar nenhum app."
        bullets={["Categorias e destaques personalizáveis","Complementos e observações por item","Atualiza em tempo real, disponível 24h","Sem app para baixar — abre no navegador"]}
        mockup={<MockupCardapio />}
        inverter={false}
      />

      {/* 2. Painel de pedidos */}
      <Bloco
        id="func-pedidos"
        titulo="Painel de pedidos"
        destaque="em tempo real"
        descricao="Os pedidos chegam organizados por status: Em Análise, Em Produção, Prontos para Entrega. Você enxerga tudo de uma vez, em qualquer dispositivo."
        bullets={["Kanban visual por status","Notificação instantânea de novos pedidos","Funciona no celular, tablet e computador","Múltiplos atendentes simultâneos"]}
        mockup={<MockupPedidos />}
        inverter={true}
        fundo={true}
      />

      {/* 3. Atendimento */}
      <Bloco
        id="func-atendimento"
        titulo="Atendimento"
        destaque="centralizado"
        descricao="Todas as conversas do WhatsApp em um painel só. Histórico completo por cliente, múltiplos atendentes no mesmo número, resposta direta sem sair do sistema."
        bullets={["Histórico completo por cliente","Vários atendentes no mesmo número","Fazer pedido direto pelo painel","Transferência entre atendentes"]}
        mockup={<MockupAtendimento />}
        inverter={false}
      />

      {/* 4. Financeiro */}
      <Bloco
        id="func-financeiro"
        labelExtra="Incluso em todos os planos"
        titulo="Financeiro"
        destaque="integrado"
        descricao="Veja quanto você faturou em tempo real, o ticket médio e o breakdown por forma de pagamento — Pix, cartão e dinheiro. Sem exportar planilha."
        bullets={["Faturamento por período (hoje, 7 dias, 30 dias)","Breakdown por Pix, cartão e dinheiro","Histórico de transações por cliente","Relatório exportável"]}
        mockup={<MockupFinanceiro />}
        inverter={true}
        fundo={true}
      />

      {/* 5. Entregas */}
      <Bloco
        id="func-entregas"
        labelExtra="Incluso em todos os planos"
        titulo="Gestão de"
        destaque="entregas e entregadores"
        descricao="Cadastre seus entregadores, acompanhe em tempo real quem está disponível, em rota ou offline, e atribua pedidos com um clique."
        bullets={["Status em tempo real — disponível, em rota, offline","Avaliação por entregador","Atribuição de pedido com um clique","Histórico de entregas por motoboy"]}
        mockup={<MockupEntregas />}
        inverter={false}
      />

      {/* 6. Fidelidade */}
      <Bloco
        id="func-fidelidade"
        labelExtra="Exclusivo — sem app adicional"
        titulo="Programa de"
        destaque="fidelidade nativo"
        descricao="Clientes acumulam pontos a cada pedido e resgatam prêmios diretamente pelo WhatsApp. Sem precisar de um app terceiro ou integração extra."
        bullets={["Pontos configuráveis por R$ gasto","Recompensas personalizadas (desconto, frete, brindes)","Resgate automático via WhatsApp","Painel com clientes, pontos e resgates"]}
        mockup={<MockupFidelidade />}
        inverter={true}
        fundo={true}
      />

      {/* 7. Cupons */}
      <Bloco
        id="func-cupons"
        labelExtra="Exclusivo — sem app adicional"
        titulo="Cupons de"
        destaque="desconto em segundos"
        descricao="Crie cupons de porcentagem, valor fixo ou frete grátis e distribua direto pelo WhatsApp para seus clientes. Acompanhe o uso em tempo real."
        bullets={["Tipos: porcentagem, valor fixo, frete grátis","Limite de usos configurável","Progresso de uso em tempo real","Compartilhe o código pelo WhatsApp"]}
        mockup={<MockupCupons />}
        inverter={false}
      />

      {/* 8. Estoque */}
      <Bloco
        id="func-estoque"
        titulo="Controle de"
        destaque="estoque com alertas"
        descricao="Cadastre seus insumos, defina quantidades mínimas e receba alertas automáticos quando o estoque estiver baixo ou com validade próxima."
        bullets={["Alerta de estoque baixo","Alerta de vencimento próximo","Categorias por tipo de insumo","Histórico de movimentação"]}
        mockup={<MockupEstoque />}
        inverter={true}
        fundo={true}
      />

      {/* CTA final da seção */}
      <div className="py-12 bg-cinza-escuro border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionCTA
            texto="Viu tudo que o Pede&Recebe faz? É tudo isso por um único plano mensal."
            botao="Quero testar grátis"
          />
        </div>
      </div>

    </section>
  );
}
