import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconStar } from "@/components/ui/icons";

const DEPOIMENTOS = [
  {
    text: "Antes eu usava um bot não-oficial e meu número bloqueou numa sexta à noite. Perdi um fim de semana inteiro de vendas. Com o Pede&Recebe isso nunca mais aconteceu. São quase 8 meses funcionando sem parar.",
    name: "Marcos Oliveira",
    estabelecimento: "Burguer do Marcos",
    cidade: "São Paulo, SP",
    inicial: "M",
    cor: "#F5C400",
  },
  {
    text: "O que me convenceu foi poder abrir no celular e no tablet ao mesmo tempo. Eu fico no salão enquanto minha esposa atende pelo celular na cozinha. Nenhum pedido passa batido.",
    name: "Ana Paula Costa",
    estabelecimento: "Pizzaria Bella Napoli",
    cidade: "Campinas, SP",
    inicial: "A",
    cor: "#E6B800",
  },
  {
    text: "Quando soube que a Anota AI tinha sido comprada pelo iFood, me preocupei. Não quero que meu concorrente veja meus dados de clientes. Migrei pro Pede&Recebe e fiquei tranquilo.",
    name: "Roberto Fernandes",
    estabelecimento: "Restaurante Sabor Caseiro",
    cidade: "Belo Horizonte, MG",
    inicial: "R",
    cor: "#FFD740",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{background:"radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,196,0,0.07) 0%, transparent 60%)"}}/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            O que os donos de restaurante
            <br />
            dizem sobre o Pede&amp;Recebe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((item, i) => (
            <div
              key={item.name}
              className="reveal bg-amarelo border-2 border-preto rounded-2xl p-6 card-hover hover:shadow-lg flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* 5 estrelas */}
              <div className="flex gap-1 mb-4" role="img" aria-label="Avaliação 5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} size={16} color="#1A1209" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-preto/70 text-sm leading-relaxed italic flex-1 mb-5">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-preto/15">
                {/* Avatar estilizado com gradiente */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-preto shrink-0 shadow-md border-2 border-preto/10"
                  style={{ backgroundColor: item.cor }}
                >
                  {item.inicial}
                </div>
                <div>
                  <div className="text-preto font-bold text-sm">{item.name}</div>
                  <div className="text-preto/75 text-xs font-semibold">{item.estabelecimento}</div>
                  <div className="text-preto/50 text-xs">{item.cidade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionCTA texto="Junte-se a +500 restaurantes que já vendem sem travar." botao="Fazer parte agora" />
      </div>
    </section>
  );
}
