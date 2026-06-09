import Image from "next/image";
import Link from "next/link";

const FUNDADORES = [
  {
    inicial: "A",
    foto: "/socios/abner.png",
    nome: "Abner",
    cargo: "Growth",
    empresa: "Phonevox Group",
    tag: null,
    instagram: "https://www.instagram.com/abner.olima/",
    descricao:
      "Fundador de empresa de atendimento com 100+ colaboradores. Estrutura vendas, abre parcerias e faz o Pede&Recebe chegar em mais restaurantes.",
  },
  {
    inicial: "G",
    foto: "/socios/gabriel.png",
    nome: "Gabriel",
    cargo: "Marketing",
    empresa: "Uply Digital",
    tag: null,
    instagram: "https://www.instagram.com/gabrieel.alex/",
    descricao:
      "Fundador de agência de marketing focada em vendas. Define como o produto é visto, posicionado e escolhido. Transforma visitante em cliente.",
  },
  {
    inicial: "H",
    foto: "/socios/hiago.png",
    nome: "Hiago",
    cargo: "Social Selling",
    empresa: "Noquinha Franquias",
    tag: "Influencer",
    instagram: "https://www.instagram.com/hiagoprates/",
    descricao:
      "Sócio da Noquinha Franquias, rede com mais de 20 unidades no Brasil. Viveu na pele o bloqueio, o pedido perdido e a comissão do iFood. É a voz do dono de restaurante dentro do produto, e leva isso pra quem o segue.",
  },
  {
    inicial: "P",
    foto: "/socios/pedro.png",
    nome: "Pedro",
    cargo: "Tecnologia",
    empresa: "",
    tag: null,
    instagram: "https://www.instagram.com/pedro_gelasko/",
    descricao:
      "Foi atendente, balconista, tirou pedido e usou sistema ruim. Constrói o Pede&Recebe e cuida do suporte dos clientes. Conhece todos os lados porque já viveu todos eles.",
  },
];

const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
              className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 card-hover flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-20 h-20 rounded-full shrink-0 overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#F5C400" }}>
                  {f.foto ? (
                    <Image src={f.foto} alt={f.nome} width={160} height={160} className="object-contain w-full h-full" />
                  ) : (
                    <span className="text-preto font-bold text-2xl leading-none select-none">{f.inicial}</span>
                  )}
                </div>
                {f.tag && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white tracking-wide">
                    {f.tag}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <p className="text-white font-bold text-lg leading-snug">{f.nome}</p>
                <p className="text-amarelo font-semibold text-sm">{f.cargo}</p>
                <p className="text-white/40 text-xs mt-0.5">{f.empresa}</p>
              </div>

              <p className="text-white/65 text-sm leading-relaxed flex-1">{f.descricao}</p>

              <Link
                href={f.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-medium transition-colors"
              >
                <IconInstagram />
                Instagram
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
