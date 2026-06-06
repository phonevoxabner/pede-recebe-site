import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconArrowRight, IconShield, IconRocket, IconUsers } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Sobre o Pede&Recebe",
  description:
    "Nascemos para resolver um problema real: restaurantes perdendo vendas por causa de sistemas de WhatsApp não-oficiais que bloqueiam seus números.",
};

const VALORES = [
  {
    icon: IconShield,
    titulo: "Segurança primeiro",
    descricao:
      "Nunca vamos oferecer uma solução que coloque o número do nosso cliente em risco. API Oficial é inegociável.",
  },
  {
    icon: IconRocket,
    titulo: "Simples e direto",
    descricao:
      "Dono de restaurante não tem tempo para aprender sistema complexo. Nossa plataforma precisa ser intuitiva desde o primeiro dia.",
  },
  {
    icon: IconUsers,
    titulo: "Independência do cliente",
    descricao:
      "Seus dados, seus clientes, sua história. Não dependemos do iFood e não queremos que você dependa de nós mais do que o necessário.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-cinza-escuro border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Sobre nós</SectionLabel>
          <h1 className="font-condensed text-5xl sm:text-6xl font-bold text-white leading-none mt-2 mb-4">
            Nascemos para resolver
            <br />
            <span className="text-amarelo">um problema real</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              O Pede&amp;Recebe nasceu de uma frustração que escutamos centenas
              de vezes: o restaurante estava cheio, o fone tocando, e o WhatsApp
              simplesmente parou de receber mensagens. Bloqueado. Sem aviso.
              Sem solução rápida.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              A maioria dos sistemas de automação de WhatsApp para restaurantes
              usava, e ainda usa, APIs não-oficiais. Funcionam bem por um tempo.
              Mas o Meta identifica o comportamento suspeito e bane o número.
              Fim das mensagens, fim das vendas, fim do fim de semana.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Nossa decisão desde o primeiro dia foi simples: somente API
              Oficial do Meta. Isso significa um processo de aprovação mais
              demorado, mais caro e mais trabalhoso para nós. Mas é a única
              forma de garantir que o número do nosso cliente não será bloqueado.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Em 2025, o iFood comprou a Anota AI, o maior sistema de automação
              de WhatsApp para restaurantes do Brasil. A consolidação no setor
              nos motivou ainda mais: restaurantes precisam de alternativas
              independentes e confiáveis. É isso que construímos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cinza-escuro border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-condensed text-4xl font-bold text-white">
              Nossos valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALORES.map((valor, i) => {
              const Icon = valor.icon;
              return (
                <div
                  key={i}
                  className="bg-preto border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amarelo/10 flex items-center justify-center mb-6 mx-auto">
                    <Icon size={26} color="#F5C400" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 font-condensed">
                    {valor.titulo}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {valor.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-condensed text-4xl font-bold text-white mb-4">
            Quer conversar?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Se tiver dúvidas, sugestões ou quiser entender melhor como o
            Pede&amp;Recebe pode ajudar seu restaurante, fale com a gente.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-amarelo text-preto font-semibold text-base px-8 py-4 rounded-xl hover:bg-amarelo-claro transition-colors"
          >
            Entrar em contato
            <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
