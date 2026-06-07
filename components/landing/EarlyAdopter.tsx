const CARDS = [
  {
    titulo: "Acesso direto aos fundadores",
    descricao:
      "Você fala com quem construiu o produto e opera restaurante. Não com um atendente de nível 1.",
    icone: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="8" cy="7" r="3.5" fill="#1A1209" />
        <circle cx="15" cy="7" r="2.75" fill="#1A1209" opacity="0.7" />
        <path
          d="M1 18c0-3.314 3.134-6 7-6s7 2.686 7 6"
          stroke="#1A1209"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M15.5 12.5c2.485.7 4.5 2.686 4.5 5.5"
          stroke="#1A1209"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    titulo: "Você molda o produto",
    descricao:
      "Sua operação influencia diretamente as próximas funcionalidades. Seus problemas viram nossa prioridade.",
    icone: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M11 7.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
          fill="#1A1209"
        />
        <path
          d="M11 1v2M11 19v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 11h2M19 11h2M4.22 17.78l1.42-1.42M16.36 5.64l1.42-1.42"
          stroke="#1A1209"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    titulo: "Preço que nunca mais volta",
    descricao:
      "Quem entra agora trava o menor preço da história do Pede&Recebe. Para sempre, enquanto permanecer ativo.",
    icone: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12.5 2H7a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 2 7v5.5a1 1 0 0 0 .293.707l9.5 9.5a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414l-9.5-9.5A1 1 0 0 0 12.5 2Z"
          fill="#1A1209"
          opacity="0.15"
          stroke="#1A1209"
          strokeWidth="1.6"
        />
        <circle cx="7.5" cy="7.5" r="1.5" fill="#1A1209" />
        <path
          d="M9 12l4 4"
          stroke="#1A1209"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export default function EarlyAdopter() {
  return (
    <section className="bg-preto py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Somos novos. E isso é uma vantagem para você.
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Estamos nos primeiros meses e buscamos restaurantes parceiros para crescer
            juntos. Quem entra agora tem condições que nunca mais vão existir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={card.titulo}
              className="reveal bg-white/5 border border-white/10 rounded-2xl p-7 card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-amarelo flex items-center justify-center mb-5">
                {card.icone}
              </div>
              <h3 className="text-white font-bold text-xl font-condensed mb-2">
                {card.titulo}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{card.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-amarelo text-preto font-bold text-base px-8 py-4 rounded-xl hover:bg-amarelo-claro transition-colors cta-pulse"
          >
            Quero ser um dos primeiros
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                stroke="#1A1209"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="text-white/40 text-sm mt-4">
            Vagas limitadas para o programa de early adopters.
          </p>
        </div>
      </div>
    </section>
  );
}
