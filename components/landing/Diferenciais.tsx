import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconWhatsapp, IconGlobe, IconLock } from "@/components/ui/icons";

const DIFERENCIAIS = [
  {
    icon: IconWhatsapp,
    tag: "Parceiro Meta Oficial",
    title: "API Oficial do WhatsApp",
    description:
      "Ao contrário de bots e apps não-autorizados, usamos a API Oficial do Meta. Isso significa que seu número nunca será banido — garantia real, não promessa vazia.",
    tagColor: "text-verde bg-verde/10 border-verde/20",
  },
  {
    icon: IconGlobe,
    tag: "Zero instalação",
    title: "Funciona no navegador",
    description:
      "Abra em qualquer computador, tablet ou celular. Sem instalar nada, sem depender de um único dispositivo. Se a internet funciona, seu sistema funciona.",
    tagColor: "text-amarelo bg-amarelo/10 border-amarelo/20",
  },
  {
    icon: IconLock,
    tag: "Independente",
    title: "Seus dados são seus",
    description:
      "Você não depende do iFood nem de nenhuma grande plataforma. Seus clientes, seu histórico, sua autonomia — tudo permanece com você.",
    tagColor: "text-white/70 bg-white/5 border-white/15",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 lg:py-28 bg-cinza-escuro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Por que o Pede&amp;Recebe</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight">
            Três razões que fazem
            <br />
            <span className="text-amarelo">toda a diferença</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal bg-preto border border-white/10 hover:border-amarelo/40 rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-amarelo scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />
                <div className="w-14 h-14 rounded-2xl bg-amarelo/10 flex items-center justify-center mb-6 group-hover:bg-amarelo/20 transition-colors">
                  <Icon size={26} color="#F5C400" />
                </div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-white font-semibold text-xl mb-3 font-condensed">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <SectionCTA
          texto="Pronto para vender sem risco de bloqueio?"
          botao="Testar grátis por 14 dias"
        />
      </div>
    </section>
  );
}
