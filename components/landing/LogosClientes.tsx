import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const LOGOS = [
  { src: "/logos/noquinha-delivery-4.jpeg", alt: "Noquinha Pizza Delivery", bg: "bg-[#C41E1E]", border: false },
  { src: "/logos/noquinha-franquias.jpeg",alt: "Noquinha Franquias",      bg: "bg-preto",       border: true  },
  { src: "/logos/suco-bagaco.png",        alt: "Suco Bagaço Suqueria",    bg: "bg-white",       border: true  },
  { src: "/logos/gela-cuca.png",          alt: "Gela Cuca Sorveteria",    bg: "bg-white",       border: true  },
  { src: "/logos/quentinhas-vo-sonia.png",alt: "Quentinhas da Vó Sonia", bg: "bg-white",       border: true  },
  { src: "/logos/bombeef-burger.png",     alt: "Bom Beef Burger",         bg: "bg-white",       border: true  },
  { src: "/logos/fruti-polpa.png",        alt: "Fruti Polpa",             bg: "bg-transparent", border: false },
];

export default function LogosClientes() {
  return (
    <section className="py-10 sm:py-14 bg-amarelo/30 border-y border-preto/10" aria-label="Restaurantes atendidos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <SectionLabel>Quem já usa</SectionLabel>
          <p className="text-preto/60 text-sm font-medium mt-2">
            Restaurantes que já vendem mais pelo WhatsApp com o Pede&amp;Recebe
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {LOGOS.map((logo, i) => (
            <div
              key={logo.alt}
              className={`reveal rounded-full overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${logo.bg} ${logo.border ? "border-2 border-preto/10" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 relative p-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-1"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
