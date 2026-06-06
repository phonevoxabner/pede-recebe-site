import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Blog — Pede&Recebe",
  description:
    "Artigos, dicas e novidades sobre pedidos pelo WhatsApp, automação para restaurantes e como vender mais sem depender do iFood.",
};

const POSTS = [
  {
    slug: "por-que-sua-automacao-de-whatsapp-pode-ser-bloqueada",
    tag: "WhatsApp",
    titulo:
      "Por que sua automação de WhatsApp pode ser bloqueada amanhã",
    resumo:
      "Milhares de restaurantes usam bots e aplicativos não-oficiais para automatizar o WhatsApp. O que a maioria não sabe é que esses sistemas violam os termos de uso do Meta e colocam seus números em risco de bloqueio permanente.",
    data: "2 de junho de 2025",
    leitura: "5 min de leitura",
    cor: "#F5C400",
  },
  {
    slug: "api-oficial-vs-nao-oficial-qual-a-diferenca-real",
    tag: "Tecnologia",
    titulo: "API Oficial vs API não-oficial: qual a diferença real?",
    resumo:
      "Você já ouviu falar em API Oficial do WhatsApp, mas não sabe exatamente o que isso significa na prática? Neste artigo explicamos de forma simples por que isso faz toda a diferença para quem usa WhatsApp para vender.",
    data: "28 de maio de 2025",
    leitura: "7 min de leitura",
    cor: "#22C55E",
  },
  {
    slug: "como-receber-pedidos-sem-depender-do-ifood",
    tag: "Estratégia",
    titulo:
      "Como receber pedidos sem depender do iFood",
    resumo:
      "Com comissões de 20% a 30% por pedido, o iFood corrói a margem de qualquer restaurante. Mas largar a plataforma de uma vez pode assustar. Neste artigo, mostramos como construir um canal direto com seus clientes sem perder faturamento.",
    data: "20 de maio de 2025",
    leitura: "9 min de leitura",
    cor: "#EF4444",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-cinza-escuro border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="font-condensed text-5xl sm:text-6xl font-bold text-white leading-none mt-2 mb-4">
            Conteúdo para quem
            <br />
            <span className="text-amarelo">quer vender mais</span>
          </h1>
          <p className="text-white/50 text-lg">
            Artigos práticos sobre WhatsApp, automação e como crescer sem
            depender dos marketplaces.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group block bg-cinza-escuro border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="h-48 flex items-end p-6"
                  style={{
                    background: `linear-gradient(135deg, ${post.cor}15 0%, transparent 60%)`,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <span
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${post.cor}20`,
                      color: post.cor,
                      border: `1px solid ${post.cor}30`,
                    }}
                  >
                    {post.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-amarelo transition-colors font-condensed">
                    {post.titulo}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.resumo}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-white/30 text-xs">
                      {post.data} &middot; {post.leitura}
                    </div>
                    <div className="text-amarelo opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
