import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconWhatsapp, IconGlobe, IconLock } from "@/components/ui/icons";

const DIFERENCIAIS = [
  {
    icon: IconWhatsapp,
    tag: "Parceiro Meta Oficial",
    title: "API Oficial do WhatsApp",
    description:
      "Ao contrário de bots e apps não-autorizados, usamos a API Oficial do Meta. Isso significa que seu número nunca será banido. Garantia real, não promessa vazia.",
  },
  {
    icon: IconGlobe,
    tag: "Zero instalação",
    title: "Funciona no navegador",
    description:
      "Abra em qualquer computador, tablet ou celular. Sem instalar nada, sem depender de um único dispositivo. Se a internet funciona, seu sistema funciona.",
  },
  {
    icon: IconLock,
    tag: "Independente",
    title: "Seus dados são seus",
    description:
      "Você não depende do iFood nem de nenhuma grande plataforma. Seus clientes, seu histórico, sua autonomia. Tudo permanece com você.",
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-amarelo py-12 sm:py-16 lg:py-24">
      {/* sombra decorativa */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <SectionLabel onYellow>Por que o Pede&amp;Recebe</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            Três razões que fazem
            <br />
            toda a diferença
          </h2>
        </div>

        <div className="grid md:grid-cols-[1.35fr_1fr_1fr] gap-5">
          {DIFERENCIAIS.map((item, i) => {
            const Icon = item.icon;
            const isFirst = i === 0;
            const iconBgColors = ["#22C55E", "#1A1209", "#EF4444"];
            const iconColors = ["#ffffff", "#F5C400", "#ffffff"];
            return (
              <div
                key={item.title}
                className={`reveal bg-white border-2 border-preto rounded-2xl card-hover hover:shadow-xl group relative overflow-hidden ${
                  isFirst ? "p-8" : "p-7"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-preto opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" aria-hidden="true" />
                {isFirst && (
                  <span className="absolute top-5 right-5 inline-block text-[10px] font-bold text-white bg-verde px-3 py-1 rounded-full uppercase tracking-wider">
                    Exclusivo
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: iconBgColors[i] }}
                >
                  <Icon size={24} color={iconColors[i]} />
                </div>
                <span className="inline-block text-[10px] font-bold text-preto/70 bg-preto/8 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  {item.tag}
                </span>
                <h3 className={`text-preto font-bold font-condensed mb-2 ${isFirst ? "text-2xl" : "text-xl"}`}>{item.title}</h3>
                <p className="text-preto/75 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <SectionCTA
          onYellow
            texto="Pronto para vender sem risco de bloqueio?"
            botao="Testar grátis por 14 dias"
          />
        </div>
      </div>
    </section>
  );
}
