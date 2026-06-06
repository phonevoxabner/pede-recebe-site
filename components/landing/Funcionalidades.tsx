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
    <div className="flex justify-center py-2" aria-hidden="true">
      <div className="relative" style={{ width: 258 }}>

        {/* Botão silêncio (esquerda) */}
        <div className="absolute rounded-l-sm" style={{ left: -4, top: 72, width: 4, height: 22, backgroundColor: "#2a2018" }} />
        {/* Botão volume + (esquerda) */}
        <div className="absolute rounded-l-sm" style={{ left: -4, top: 104, width: 4, height: 28, backgroundColor: "#2a2018" }} />
        {/* Botão volume - (esquerda) */}
        <div className="absolute rounded-l-sm" style={{ left: -4, top: 142, width: 4, height: 28, backgroundColor: "#2a2018" }} />
        {/* Botão power (direita) */}
        <div className="absolute rounded-r-sm" style={{ right: -4, top: 110, width: 4, height: 44, backgroundColor: "#2a2018" }} />

        {/* Corpo do iPhone */}
        <div style={{
          backgroundColor: "#1A1209",
          borderRadius: 46,
          padding: 5,
          boxShadow: "0 32px 80px rgba(26,18,9,0.45), 0 8px 24px rgba(26,18,9,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
          {/* Tela */}
          <div style={{ borderRadius: 42, overflow: "hidden", backgroundColor: "#fff" }}>

            {/* Dynamic Island */}
            <div className="relative flex justify-center pt-3 pb-1 bg-white">
              <div style={{ width: 92, height: 28, backgroundColor: "#1A1209", borderRadius: 20 }} />
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pb-1">
              <span className="text-[11px] font-bold text-preto" style={{ letterSpacing: -0.3 }}>9:41</span>
              <div className="flex items-center gap-1.5">
                {/* Sinal */}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="#1A1209">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5"/>
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" opacity=".6"/>
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5" opacity=".4"/>
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" opacity=".25"/>
                </svg>
                {/* Bateria */}
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                  <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#1A1209" strokeWidth="1" opacity=".35"/>
                  <rect x="1.5" y="1.5" width="14" height="8" rx="1.2" fill="#1A1209"/>
                  <path d="M20 3.5v4c1-.5 1.5-1.2 1.5-2S21 4 20 3.5z" fill="#1A1209" opacity=".4"/>
                </svg>
              </div>
            </div>

            {/* App content */}
            {/* Header amarelo */}
            <div className="bg-amarelo px-3.5 py-3 flex items-center gap-2.5">
              <FoodPhoto tipo="burger" size={36} className="rounded-full border-2 border-preto/15 shadow shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-preto font-bold text-xs leading-tight">Abner Delivery</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="bg-preto text-amarelo text-[8px] font-bold px-1.5 py-0.5 rounded-full">Aberto</span>
                  <span className="text-preto/70 text-[9px]">30-45 min · Min. R$ 30</span>
                </div>
              </div>
            </div>

            {/* Categorias */}
            <div className="px-3 py-2 bg-white border-b border-gray-100 flex gap-1.5 overflow-hidden">
              {["Todos","Hambúrgueres","Bebidas"].map((c, i) => (
                <span key={i} className="text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap"
                  style={i===0 ? {backgroundColor:"#1A1209",color:"#F5C400"} : {backgroundColor:"#F3F4F6",color:"rgba(26,18,9,0.5)"}}>
                  {c}
                </span>
              ))}
            </div>

            {/* Produtos */}
            <div className="bg-white divide-y divide-gray-50">
              {PRODUTOS_CARDAPIO.slice(0, 3).map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5">
                  <div className="flex-1 min-w-0">
                    <div className="text-preto text-[11px] font-semibold truncate">{p.nome}</div>
                    <div className="text-preto/55 text-[9px] mt-0.5 truncate">{p.desc}</div>
                    <div className="text-preto font-bold text-[11px] mt-1">{p.preco}</div>
                  </div>
                  <div className="relative shrink-0">
                    <FoodPhoto tipo={p.tipo} size={44} />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-preto border border-white flex items-center justify-center">
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sacola */}
            <div className="px-3.5 py-2.5 bg-gray-50 border-t border-gray-100">
              <div className="bg-preto text-amarelo text-[10px] font-bold text-center py-2 rounded-xl">
                Ver sacola · R$ 86,70
              </div>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-2 bg-white">
              <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "#d1d5db" }} />
            </div>
          </div>
        </div>
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
    <div id={id} className={`${fundo ? "bg-amarelo" : "bg-transparent"} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Mockup — sempre embaixo no mobile, esquerda/direita no desktop conforme inverter */}
          <div className={`reveal order-2 ${inverter ? "lg:order-2" : "lg:order-1"}`}>
            {mockup}
          </div>
          {/* Texto — sempre primeiro no mobile */}
          <div className={`reveal order-1 ${inverter ? "lg:order-1" : "lg:order-2"}`}>
            {labelExtra && (
              <span className="inline-block text-[10px] font-bold text-preto bg-preto/10 border border-preto/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                {labelExtra}
              </span>
            )}
            <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto mb-4 leading-tight">
              {titulo}
              <br />
              <span className="underline decoration-4 decoration-preto/30">{destaque}</span>
            </h2>
            <p className="text-preto/75 text-lg leading-relaxed mb-6">{descricao}</p>
            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-preto/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-amarelo border-2 border-preto flex items-center justify-center shrink-0">
                    <IconCheck size={11} color="#1A1209" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <SectionCTA
              texto="Quer ver isso funcionando no seu restaurante?"
              botao="Testar grátis"
              onYellow={fundo}
            />
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
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-1">
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
        descricao="Monte o cardápio com categorias, fotos e variações. Compartilhe o link onde quiser. O cliente abre, escolhe e pede tudo pelo celular, sem baixar nenhum app."
        bullets={["Categorias e destaques personalizáveis","Complementos e observações por item","Atualiza em tempo real, disponível 24h","Sem app para baixar, abre no navegador"]}
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
        descricao="Veja quanto você faturou em tempo real, o ticket médio e o breakdown por forma de pagamento: Pix, cartão e dinheiro. Sem exportar planilha."
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
        bullets={["Status em tempo real: disponível, em rota, offline","Avaliação por entregador","Atribuição de pedido com um clique","Histórico de entregas por motoboy"]}
        mockup={<MockupEntregas />}
        inverter={false}
      />

      {/* 6. Fidelidade */}
      <Bloco
        id="func-fidelidade"
        labelExtra="Exclusivo, sem app"
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
        labelExtra="Exclusivo, sem app"
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

      {/* CTA final da seção — amarelo para não quebrar o visual */}
      <div className="py-12 bg-amarelo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionCTA
            texto="Viu tudo que o Pede&Recebe faz? É tudo isso por um único plano mensal."
            botao="Quero testar grátis"
            onYellow
          />
        </div>
      </div>

    </section>
  );
}
