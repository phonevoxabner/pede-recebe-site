"use client";

import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";
import FoodPhoto from "@/components/ui/FoodPhoto";

/* ─── Cardápio (phone) ─── */
const PRODUTOS = [
  { nome: "Burguer Bacon",   preco: "R$ 29,90", tipo: "burger"       },
  { nome: "Burguer Classic", preco: "R$ 28,90", tipo: "burger"       },
  { nome: "Burguer Duplo",   preco: "R$ 33,90", tipo: "burger-duplo" },
] as const;

function PhoneCardapio() {
  return (
    <div
      className="relative z-10 w-44 shrink-0"
      style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.5))" }}
    >
      {/* frame */}
      <div className="bg-[#1a1a1a] rounded-[1.8rem] p-1.5 border border-white/10">
        <div className="rounded-[1.4rem] overflow-hidden bg-[#f5f5f5]">
          {/* header restaurante */}
          <div className="bg-[#D96C4B] px-3 py-2.5 flex items-center gap-2">
            <FoodPhoto tipo="burger" size={32} className="rounded-full border-2 border-white shadow shrink-0" />
            <div>
              <div className="text-white font-bold text-xs leading-tight">Abner Delivery</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="bg-[#22C55E] text-white text-[8px] font-bold px-1.5 rounded-full">Aberto</span>
                <span className="text-white/70 text-[8px]">30-45 min</span>
              </div>
            </div>
          </div>
          {/* categorias */}
          <div className="px-2 py-1.5 bg-white border-b border-gray-100 flex gap-1 overflow-hidden">
            {["Todos","Hambúrgueres","Bebidas"].map((c, i) => (
              <span key={i} className="text-[8px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                style={i === 0 ? {backgroundColor:"#D96C4B",color:"white"} : {backgroundColor:"#f0f0f0",color:"#777"}}>
                {c}
              </span>
            ))}
          </div>
          {/* produtos */}
          <div className="bg-white divide-y divide-gray-100">
            {PRODUTOS.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-2.5 py-2">
                <div className="flex-1">
                  <div className="text-[#111] text-[10px] font-semibold leading-snug">{p.nome}</div>
                  <div className="text-[#D96C4B] text-[10px] font-bold mt-0.5">{p.preco}</div>
                </div>
                <div className="relative shrink-0">
                  <FoodPhoto tipo={p.tipo} size={40} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D96C4B] border border-white flex items-center justify-center">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            {/* pedido confirmado no final */}
            <div className="px-2.5 py-2.5 bg-[#f9f9f9]">
              <div className="bg-[#D96C4B] text-white text-[9px] font-bold text-center py-1.5 rounded-lg">
                Ver sacola · R$ 86,70
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard (painel de pedidos) ─── */
const KANBAN = [
  {
    titulo: "EM ANÁLISE",
    cor: "#c0392b",
    bg: "rgba(192,57,43,0.18)",
    pedidos: [
      { id: "#041", tipo: "Delivery", desc: "Burguer Classic x2", valor: "R$ 57,80", tempo: "2 min" },
      { id: "#042", tipo: "Retirada", desc: "Combo Master x1",    valor: "R$ 43,90", tempo: "5 min" },
    ],
  },
  {
    titulo: "EM PRODUÇÃO",
    cor: "#c4950a",
    bg: "rgba(196,149,10,0.18)",
    pedidos: [
      { id: "#039", tipo: "Delivery", desc: "Burguer Duplo x1", valor: "R$ 51,70", tempo: "12 min" },
    ],
  },
  {
    titulo: "PRONTOS",
    cor: "#1a9e4a",
    bg: "rgba(26,158,74,0.18)",
    pedidos: [
      { id: "#038", tipo: "Retirada", desc: "Burguer Bacon x3", valor: "R$ 89,70", tempo: "18 min" },
    ],
  },
];

function DashboardPedidos() {
  return (
    <div
      className="relative z-0 w-full"
      style={{ filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.6))" }}
    >
      {/* browser chrome */}
      <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10">
        {/* barra do browser */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"/>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]"/>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"/>
          </div>
          <div className="flex-1 mx-3 bg-[#2a2a2a] rounded-md px-3 py-1 flex items-center gap-2">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/>
            </svg>
            <span className="text-[#555] text-[9px]">pederecebe.app</span>
          </div>
        </div>

        {/* conteúdo do painel */}
        <div className="p-3 bg-[#111111]">
          {/* topbar */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-white font-semibold text-xs">Gestão de Pedidos</div>
              <div className="text-white/30 text-[9px]">4 pedidos ativos</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="text-white/25 text-[9px]">Buscar...</span>
              </div>
              <div className="bg-amarelo text-preto text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Novo Pedido
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="flex gap-1 mb-3">
            {["Todos","Delivery","Retirada","Local"].map((t,i)=>(
              <span key={i} className="text-[9px] px-2.5 py-0.5 rounded-full font-semibold"
                style={i===0?{backgroundColor:"#F5C400",color:"#111"}:{color:"rgba(255,255,255,0.3)"}}>
                {t}
              </span>
            ))}
          </div>

          {/* kanban */}
          <div className="grid grid-cols-3 gap-2">
            {KANBAN.map((col) => (
              <div key={col.titulo} className="rounded-xl overflow-hidden" style={{backgroundColor:col.bg}}>
                <div className="flex items-center justify-between px-2.5 py-2">
                  <span className="text-[8px] font-bold tracking-wider" style={{color:col.cor}}>{col.titulo}</span>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                    style={{backgroundColor:col.cor}}>
                    {col.pedidos.length}
                  </span>
                </div>
                <div className="px-1.5 pb-2 space-y-1.5">
                  {col.pedidos.map((p) => (
                    <div key={p.id} className="bg-[#1a1a1a] rounded-lg p-2 border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-bold text-[9px]">{p.id}</span>
                        <span className="text-[7px] font-semibold px-1.5 rounded-full"
                          style={p.tipo==="Delivery"
                            ?{backgroundColor:"rgba(245,196,0,0.15)",color:"#F5C400"}
                            :{backgroundColor:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.4)"}}>
                          {p.tipo}
                        </span>
                      </div>
                      <div className="text-white/40 text-[8px] leading-snug mb-1">{p.desc}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/25 text-[7px]">{p.tempo} atrás</span>
                        <span className="text-white font-semibold text-[8px]">{p.valor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* fundo radial */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{backgroundImage:"radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,196,0,0.12) 0%, transparent 70%)"}}/>
      {/* grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize:"60px 60px",
        }}/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amarelo/10 border border-amarelo/30 text-amarelo text-xs font-semibold px-4 py-2 rounded-full mb-8 badge-pulse">
              <span className="w-2 h-2 rounded-full bg-amarelo pulse-dot"/>
              API Oficial Meta — Parceiro Certificado
            </div>

            <h1 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-6">
              Pedidos pelo WhatsApp
              <br />
              <span className="text-amarelo">que nunca param.</span>
            </h1>

            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Do cardápio ao financeiro, das entregas ao programa de fidelidade
              — tudo em uma plataforma, via API Oficial do WhatsApp. Sem
              bloqueio, sem instalação, independente do iFood.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/#planos"
                className="inline-flex items-center justify-center gap-2 bg-amarelo text-preto font-semibold text-base px-8 py-4 rounded-xl hover:bg-amarelo-claro transition-colors">
                Testar 14 dias grátis
                <IconArrowRight size={18}/>
              </Link>
              <Link href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl hover:border-white/50 hover:bg-white/5 transition-colors">
                Ver como funciona
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["M","A","L","R","T"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-preto flex items-center justify-center text-xs font-bold text-preto"
                    style={{backgroundColor:["#F5C400","#FFD740","#E6B800","#F5C400","#FFD740"][i]}}>
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm">
                <span className="text-white font-semibold">+500 restaurantes</span> já vendem sem travar
              </p>
            </div>
          </div>

          {/* ── Mockup duplo ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* glow */}
            <div className="absolute -inset-8 rounded-full opacity-20 pointer-events-none" aria-hidden="true"
              style={{background:"radial-gradient(circle, rgba(245,196,0,0.35) 0%, transparent 70%)"}}/>

            <div className="relative w-full max-w-md" aria-hidden="true">

              {/* Dashboard atrás */}
              <div className="relative z-0">
                <DashboardPedidos/>
              </div>

              {/* Phone na frente, sobrepondo canto inferior esquerdo do dashboard */}
              <div className="absolute -bottom-8 -left-4 z-10">
                <PhoneCardapio/>
              </div>

              {/* Badge novo pedido — canto superior direito */}
              <div className="absolute -top-4 -right-4 z-20 float-badge">
                <div className="bg-cinza-escuro border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amarelo/15 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="2.5">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-[11px] font-semibold leading-none">Novo pedido</div>
                      <div className="text-amarelo text-[9px] mt-0.5">#043 · R$ 62,80</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge API Oficial — canto inferior direito */}
              <div className="absolute -bottom-2 -right-6 z-20 float-badge-delay">
                <div className="bg-amarelo rounded-xl px-3.5 py-2 shadow-xl">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#111">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span className="text-preto text-[11px] font-bold whitespace-nowrap">API Oficial Meta</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* espaço para o phone que sobrepõe */}
      <div className="h-8 lg:hidden" aria-hidden="true"/>
    </section>
  );
}
