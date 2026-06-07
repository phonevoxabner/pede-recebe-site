const FUNDADORES = [
  {
    inicial: "A",
    nome: "Abner",
    cargo: "Growth",
    empresa: "Phonevox Group",
    descricao:
      "Fundador de empresa de atendimento com 100+ colaboradores. Estrutura vendas, abre parcerias e faz o Pede&Recebe chegar em mais restaurantes.",
  },
  {
    inicial: "G",
    nome: "Gabriel",
    cargo: "Marketing",
    empresa: "Uply Digital",
    descricao:
      "Fundador de agência de marketing focada em vendas. Define como o produto é visto, posicionado e escolhido. Transforma visitante em cliente.",
  },
  {
    inicial: "H",
    nome: "Hiago",
    cargo: "Operações",
    empresa: "Noquinha Delivery",
    descricao:
      "Sócio de rede de franquia de pizzaria com unidades em todo o Brasil. Viveu na pele o bloqueio, o pedido perdido e a comissão do iFood. É a voz do cliente dentro do produto.",
  },
  {
    inicial: "P",
    nome: "Pedro",
    cargo: "Tecnologia",
    empresa: "—",
    descricao:
      "Foi atendente, balconista, tirou pedido e usou sistema ruim. Constrói o Pede&Recebe e cuida do suporte dos clientes. Conhece todos os lados porque já viveu todos eles.",
  },
];

export default function QuemEstaPorTras() {
  return (
    <section className="bg-preto py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Criado por quem vive isso todo dia.
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            O Pede&amp;Recebe não nasceu em uma sala de reunião. Nasceu de uma sexta
            à noite com número bloqueado e pedidos parando de chegar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FUNDADORES.map((f, i) => (
            <div
              key={f.nome}
              className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-amarelo flex items-center justify-center mb-4 shrink-0">
                <span className="text-preto font-bold text-2xl leading-none select-none">
                  {f.inicial}
                </span>
              </div>

              <div className="mb-3">
                <p className="text-white font-bold text-lg leading-snug">{f.nome}</p>
                <p className="text-amarelo font-semibold text-sm">{f.cargo}</p>
                <p className="text-white/40 text-xs mt-0.5">{f.empresa}</p>
              </div>

              <p className="text-white/65 text-sm leading-relaxed">{f.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
