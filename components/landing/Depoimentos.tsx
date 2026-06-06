import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconStar } from "@/components/ui/icons";

const DEPOIMENTOS = [
  {
    text: "Antes eu usava um bot não-oficial e meu número bloqueou numa sexta à noite. Perdi um fim de semana inteiro de vendas. Com o Pede&Recebe isso nunca mais aconteceu — são quase 8 meses funcionando sem parar.",
    name: "Marcos Oliveira",
    estabelecimento: "Burguer do Marcos",
    cidade: "São Paulo, SP",
    inicial: "M",
  },
  {
    text: "O que me convenceu foi poder abrir no celular e no tablet ao mesmo tempo. Eu fico no salão enquanto minha esposa atende pelo celular na cozinha. Nenhum pedido passa batido.",
    name: "Ana Paula Costa",
    estabelecimento: "Pizzaria Bella Napoli",
    cidade: "Campinas, SP",
    inicial: "A",
  },
  {
    text: "Quando soube que a Anota AI tinha sido comprada pelo iFood, me preocupei. Não quero que meu concorrente veja meus dados de clientes. Migrei pro Pede&Recebe e fiquei tranquilo.",
    name: "Roberto Fernandes",
    estabelecimento: "Restaurante Sabor Caseiro",
    cidade: "Belo Horizonte, MG",
    inicial: "R",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            O que os donos de restaurante
            <br />
            <span className="text-amarelo">dizem sobre o Pede&amp;Recebe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((item, i) => (
            <div
              key={i}
              className="reveal bg-cinza-escuro border border-white/10 rounded-2xl p-6 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} size={16} color="#F5C400" />
                ))}
              </div>
              <blockquote className="text-white/70 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amarelo flex items-center justify-center text-sm font-bold text-preto shrink-0">
                  {item.inicial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-white/40 text-xs">
                    {item.estabelecimento} &mdash; {item.cidade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SectionCTA
          texto="Junte-se a +500 restaurantes que já vendem sem travar."
          botao="Fazer parte agora"
        />
      </div>
    </section>
  );
}
