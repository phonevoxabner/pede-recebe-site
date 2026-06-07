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
    <div className="relative z-10 shrink-0" style={{ width: 168 }}>

      {/* Botão silêncio */}
      <div className="absolute rounded-l-sm" style={{ left: -3, top: 56, width: 3, height: 16, backgroundColor: "#2a2018" }} />
      {/* Volume + */}
      <div className="absolute rounded-l-sm" style={{ left: -3, top: 80, width: 3, height: 20, backgroundColor: "#2a2018" }} />
      {/* Volume - */}
      <div className="absolute rounded-l-sm" style={{ left: -3, top: 108, width: 3, height: 20, backgroundColor: "#2a2018" }} />
      {/* Power */}
      <div className="absolute rounded-r-sm" style={{ right: -3, top: 84, width: 3, height: 32, backgroundColor: "#2a2018" }} />

      {/* Corpo do iPhone */}
      <div style={{
        backgroundColor: "#1A1209",
        borderRadius: 34,
        padding: 4,
        boxShadow: "0 24px 60px rgba(26,18,9,0.5), 0 6px 20px rgba(26,18,9,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}>
        {/* Tela */}
        <div style={{ borderRadius: 30, overflow: "hidden", backgroundColor: "#fff" }}>

          {/* Dynamic Island */}
          <div className="flex justify-center pt-2 pb-0.5 bg-white">
            <div style={{ width: 64, height: 20, backgroundColor: "#1A1209", borderRadius: 14 }} />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-3.5 pb-1">
            <span className="text-[9px] font-bold text-preto" style={{ letterSpacing: -0.2 }}>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="11" height="8" viewBox="0 0 14 10" fill="#1A1209">
                <rect x="0" y="6" width="2.5" height="4" rx="0.5"/>
                <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" opacity=".6"/>
                <rect x="7" y="2" width="2.5" height="8" rx="0.5" opacity=".4"/>
                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" opacity=".25"/>
              </svg>
              <svg width="17" height="9" viewBox="0 0 22 11" fill="none">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#1A1209" strokeWidth="1" opacity=".35"/>
                <rect x="1.5" y="1.5" width="13" height="8" rx="1.2" fill="#1A1209"/>
                <path d="M20 3.5v4c1-.5 1.5-1.2 1.5-2S21 4 20 3.5z" fill="#1A1209" opacity=".4"/>
              </svg>
            </div>
          </div>

          {/* Header amarelo */}
          <div className="bg-amarelo px-3 py-2 flex items-center gap-2">
            <FoodPhoto tipo="burger" size={28} className="rounded-full border-2 border-preto/15 shadow shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-preto font-bold text-[10px] leading-tight">Abner Delivery</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="bg-preto text-amarelo text-[7px] font-bold px-1.5 py-0.5 rounded-full">Aberto</span>
                <span className="text-preto/70 text-[8px]">30-45 min</span>
              </div>
            </div>
          </div>

          {/* Categorias */}
          <div className="px-2.5 py-1.5 bg-white border-b border-gray-100 flex gap-1 overflow-hidden">
            {["Todos","Hambúrgueres","Bebidas"].map((c, i) => (
              <span key={i} className="text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                style={i === 0 ? {backgroundColor:"#1A1209",color:"#F5C400"} : {backgroundColor:"#F3F4F6",color:"rgba(26,18,9,0.5)"}}>
                {c}
              </span>
            ))}
          </div>

          {/* Produtos */}
          <div className="bg-white divide-y divide-gray-50">
            {PRODUTOS.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-2.5 py-2">
                <div className="flex-1 min-w-0">
                  <div className="text-preto text-[9px] font-semibold leading-snug truncate">{p.nome}</div>
                  <div className="text-preto font-bold text-[9px] mt-0.5">{p.preco}</div>
                </div>
                <div className="relative shrink-0">
                  <FoodPhoto tipo={p.tipo} size={34} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-preto border border-white flex items-center justify-center">
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="3">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            {/* Sacola */}
            <div className="px-2.5 py-2 bg-gray-50">
              <div className="bg-preto text-amarelo text-[8px] font-bold text-center py-1.5 rounded-lg">
                Ver sacola · R$ 86,70
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-1.5 bg-white">
            <div className="w-16 h-0.5 rounded-full" style={{ backgroundColor: "#d1d5db" }} />
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
    bg: "#FFF0EE",
    border: "#FACCB8",
    pedidos: [
      { id: "#041", tipo: "Delivery", desc: "Burguer Classic x2", valor: "R$ 57,80", tempo: "2 min" },
      { id: "#042", tipo: "Retirada", desc: "Combo Master x1",    valor: "R$ 43,90", tempo: "5 min" },
    ],
  },
  {
    titulo: "EM PRODUÇÃO",
    cor: "#B8860B",
    bg: "#FFFBEA",
    border: "#F5E088",
    pedidos: [
      { id: "#039", tipo: "Delivery", desc: "Burguer Duplo x1", valor: "R$ 51,70", tempo: "12 min" },
    ],
  },
  {
    titulo: "PRONTOS",
    cor: "#1a9e4a",
    bg: "#EDFBF3",
    border: "#A8E6C0",
    pedidos: [
      { id: "#038", tipo: "Retirada", desc: "Burguer Bacon x3", valor: "R$ 89,70", tempo: "18 min" },
    ],
  },
];

function DashboardPedidos() {
  return (
    <div className="relative z-0 w-full" style={{ filter: "drop-shadow(0 16px 40px rgba(26,18,9,0.12))" }}>
      {/* browser chrome */}
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
        {/* barra do browser */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"/>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5C400]"/>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"/>
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 flex items-center gap-2 border border-gray-100">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/>
            </svg>
            <span className="text-gray-400 text-[9px]">pederecebe.app</span>
          </div>
        </div>

        {/* conteúdo do painel */}
        <div className="p-3 bg-white">
          {/* topbar */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-preto font-semibold text-xs">Gestão de Pedidos</div>
              <div className="text-preto/55 text-[9px]">4 pedidos ativos</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="text-preto/45 text-[9px]">Buscar...</span>
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
                style={i===0?{backgroundColor:"#F5C400",color:"#1A1209"}:{color:"rgba(26,18,9,0.35)",backgroundColor:"#F3F4F6"}}>
                {t}
              </span>
            ))}
          </div>

          {/* kanban claro */}
          <div className="grid grid-cols-3 gap-2">
            {KANBAN.map((col) => (
              <div key={col.titulo} className="rounded-xl overflow-hidden border"
                style={{backgroundColor: col.bg, borderColor: col.border}}>
                <div className="flex items-center justify-between px-2.5 py-2">
                  <span className="text-[8px] font-bold tracking-wider" style={{color:col.cor}}>{col.titulo}</span>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                    style={{backgroundColor:col.cor}}>
                    {col.pedidos.length}
                  </span>
                </div>
                <div className="px-1.5 pb-2 space-y-1.5">
                  {col.pedidos.map((p) => (
                    <div key={p.id} className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-preto font-bold text-[9px]">{p.id}</span>
                        <span className="text-[7px] font-semibold px-1.5 rounded-full bg-amarelo/20 text-preto/75">
                          {p.tipo}
                        </span>
                      </div>
                      <div className="text-preto/70 text-[8px] leading-snug mb-1">{p.desc}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-preto/50 text-[7px]">{p.tempo} atrás</span>
                        <span className="text-preto font-semibold text-[8px]">{p.valor}</span>
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
    <section className="relative overflow-hidden pt-16">
      {/* Círculos decorativos amarelos */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amarelo/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -left-16 w-56 h-56 rounded-full bg-amarelo/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-amarelo/8 pointer-events-none" aria-hidden="true" />
      {/* Pontos decorativos */}
      <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-amarelo/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-48 left-1/3 w-2 h-2 rounded-full bg-amarelo/30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-24 right-1/3 w-4 h-4 rounded-full bg-amarelo/25 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-preto text-amarelo text-xs font-bold px-4 py-2 rounded-full mb-8 shadow-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C400" aria-hidden="true">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              API Oficial Meta · Parceiro Certificado
            </div>

            <h1 className="font-condensed text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-4">
              Pedidos pelo WhatsApp
              <br />
              <span className="text-amarelo">que nunca param.</span>
            </h1>

            <p className="text-preto/50 text-sm italic mb-5 leading-snug">
              "Desenvolvido por quem já perdeu um fim de semana inteiro de vendas com número bloqueado."
            </p>

            <p className="text-preto/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Do cardápio ao financeiro, das entregas ao programa de fidelidade
              , tudo em uma plataforma, via API Oficial do WhatsApp. Sem
              bloqueio, sem instalação, independente do iFood.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/#planos"
                className="cta-pulse inline-flex items-center justify-center gap-2 bg-amarelo text-preto font-bold text-base px-8 py-4 rounded-xl border-2 border-preto hover:bg-amarelo-claro transition-colors">
                Testar 14 dias grátis
                <IconArrowRight size={18}/>
              </Link>
              <Link href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border-2 border-preto text-preto font-semibold text-base px-8 py-4 rounded-xl hover:bg-preto hover:text-white transition-colors">
                Ver como funciona
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { l: "M", bg: "#F5C400" },
                  { l: "A", bg: "#E6B800" },
                  { l: "L", bg: "#FFD740" },
                  { l: "R", bg: "#F5C400" },
                  { l: "T", bg: "#E6B800" },
                ].map((av, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-preto shadow-md"
                    style={{ backgroundColor: av.bg, zIndex: 5 - i }}
                  >
                    {av.l}
                  </div>
                ))}
              </div>
              <p className="text-preto/70 text-sm">
                <span className="text-preto font-bold">+500 restaurantes</span> já vendem sem travar
              </p>
            </div>
          </div>

          {/* ── Mobile: dual mockup empilhado ── */}
          <div className="lg:hidden" aria-hidden="true">
            {/* Dashboard em cima, com badge no canto */}
            <div className="relative">
              <div className="absolute -top-3 -right-1 z-20 float-badge">
                <div className="bg-white border border-preto/10 rounded-xl shadow-lg px-3 py-2 shadow-xl flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-amarelo/15 flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="2.5">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-preto text-[10px] font-semibold leading-none">Novo pedido</div>
                    <div className="text-amarelo text-[9px] mt-0.5">#043 · R$ 62,80</div>
                  </div>
                </div>
              </div>
              <DashboardPedidos />
            </div>

            {/* Phone saindo da base do dashboard + badge à direita */}
            <div className="flex items-end justify-between -mt-10 px-1">
              <div className="z-10 drop-shadow-2xl">
                <PhoneCardapio />
              </div>
              <div className="pb-6 float-badge-delay">
                <div className="bg-amarelo rounded-xl px-3 py-2 shadow-xl flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#111">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  <span className="text-preto text-[10px] font-bold whitespace-nowrap">API Oficial Meta</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop: mockup duplo ── */}
          <div className="hidden lg:flex relative justify-end">
            <div className="absolute -inset-8 rounded-full pointer-events-none" aria-hidden="true"
              style={{background:"radial-gradient(circle, rgba(245,196,0,0.2) 0%, transparent 65%)"}}/>

            <div className="relative w-full max-w-md" aria-hidden="true">
              <div className="relative z-0">
                <DashboardPedidos/>
              </div>
              <div className="absolute -bottom-8 -left-4 z-10">
                <PhoneCardapio/>
              </div>
              <div className="absolute -top-4 -right-4 z-20 float-badge">
                <div className="bg-white border border-preto/10 rounded-xl shadow-lg px-3.5 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amarelo/15 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="2.5">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-preto text-[11px] font-semibold leading-none">Novo pedido</div>
                      <div className="text-amarelo text-[9px] mt-0.5">#043 · R$ 62,80</div>
                    </div>
                  </div>
                </div>
              </div>
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
    </section>
  );
}
