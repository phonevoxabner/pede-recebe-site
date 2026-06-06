"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import {
  IconMonitor,
  IconStore,
  IconWhatsapp,
  IconDollar,
  IconTruck,
  IconGift,
  IconTicket,
  IconBox,
  IconArrowRight,
} from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const MODULOS = [
  {
    icon: IconMonitor,
    nome: "Painel de Pedidos",
    desc: "Kanban em tempo real: Em Análise, Em Produção, Prontos para Entrega.",
    anchorId: "func-pedidos",
    destaque: false,
  },
  {
    icon: IconStore,
    nome: "Cardápio Digital",
    desc: "Link compartilhável com categorias, fotos, complementos e preços.",
    anchorId: "func-cardapio",
    destaque: false,
  },
  {
    icon: IconWhatsapp,
    nome: "Atendimento",
    desc: "Todas as conversas do WhatsApp centralizadas. Vários atendentes, um número.",
    anchorId: "func-atendimento",
    destaque: false,
  },
  {
    icon: IconDollar,
    nome: "Financeiro",
    desc: "Faturamento, ticket médio e breakdown por Pix, cartão e dinheiro.",
    anchorId: "func-financeiro",
    destaque: true,
  },
  {
    icon: IconTruck,
    nome: "Entregas",
    desc: "Gestão de entregadores com status em tempo real: disponível, em rota, offline.",
    anchorId: "func-entregas",
    destaque: true,
  },
  {
    icon: IconGift,
    nome: "Fidelidade",
    desc: "Programa de pontos automático. Clientes acumulam a cada pedido e resgatam prêmios.",
    anchorId: "func-fidelidade",
    destaque: true,
  },
  {
    icon: IconTicket,
    nome: "Cupons",
    desc: "Crie cupons de desconto em segundos e distribua direto pelo WhatsApp.",
    anchorId: "func-cupons",
    destaque: true,
  },
  {
    icon: IconBox,
    nome: "Estoque",
    desc: "Controle de insumos com alertas de estoque baixo e vencimento próximo.",
    anchorId: "func-estoque",
    destaque: false,
  },
];

export default function ModulosSection() {
  const pathname = usePathname();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [pathname]
  );

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Plataforma completa</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight">
            Tudo em um só lugar
          </h2>
          <p className="text-preto/75 mt-3 text-lg max-w-xl mx-auto">
            Oito módulos integrados. Clique em qualquer um para ver como funciona.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULOS.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <a
                key={mod.nome}
                href={`/#${mod.anchorId}`}
                onClick={(e) => handleClick(e, mod.anchorId)}
                className="reveal relative bg-amarelo rounded-2xl p-6 border-2 border-preto
                  card-hover hover:shadow-[0_8px_32px_rgba(26,18,9,0.15)]
                  group cursor-pointer block"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                {/* badge novo */}
                {mod.destaque && (
                  <span className="absolute top-4 right-4 text-[9px] font-bold text-amarelo bg-preto px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Novo
                  </span>
                )}

                {/* ícone — sempre aceso */}
                <div className="w-12 h-12 rounded-xl bg-preto flex items-center justify-center mb-5 transition-colors">
                  <Icon size={22} color="#F5C400" />
                </div>

                <div className="font-condensed text-preto font-bold text-xl mb-1.5 transition-colors">
                  {mod.nome}
                </div>
                <p className="text-preto/70 text-sm leading-relaxed mb-4">
                  {mod.desc}
                </p>

                {/* "Ver detalhes" aparece no hover */}
                <div className="flex items-center gap-1.5 text-preto/60 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0">
                  Ver detalhes
                  <IconArrowRight size={13} />
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-center text-preto/60 text-sm mt-8">
          Todos os módulos inclusos em todos os planos.
        </p>
        <SectionCTA
          texto="Oito módulos por um único plano mensal."
          botao="Quero começar agora"
        />
      </div>
    </section>
  );
}
