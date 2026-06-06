"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconWhatsapp, IconMail, IconCheck } from "@/components/ui/icons";

const SEGMENTOS = [
  "Hamburgueria",
  "Pizzaria",
  "Restaurante",
  "Lanchonete",
  "Sorveteria / Açaí",
  "Cafeteria / Confeitaria",
  "Marmitaria",
  "Outro",
];

export default function ContatoSection() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [segmentosSelecionados, setSegmentosSelecionados] = useState<string[]>([]);

  function toggleSegmento(seg: string) {
    setSegmentosSelecionados((prev) =>
      prev.includes(seg) ? prev.filter((s) => s !== seg) : [...prev, seg]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1200);
  }

  return (
    <section id="contato" className="py-20 lg:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Esquerda — copy */}
          <div className="reveal">
            <SectionLabel>Contato</SectionLabel>
            <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-white leading-tight mt-2 mb-4">
              Fale com a gente
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Tem dúvida, quer uma demonstração ou precisa de ajuda para
              migrar de sistema? Respondemos em até 2 horas úteis.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center gap-4 bg-cinza-escuro border border-white/10 hover:border-verde/30 rounded-2xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-verde/10 flex items-center justify-center shrink-0 group-hover:bg-verde/20 transition-colors">
                  <IconWhatsapp size={20} color="#22C55E" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">(11) 99999-9999</div>
                  <div className="text-verde text-xs font-medium mt-0.5">Resposta em minutos via WhatsApp</div>
                </div>
              </a>

              <a
                href="mailto:contato@pederecebe.com.br"
                className="flex items-center gap-4 bg-cinza-escuro border border-white/10 hover:border-amarelo/30 rounded-2xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amarelo/10 flex items-center justify-center shrink-0 group-hover:bg-amarelo/20 transition-colors">
                  <IconMail size={20} color="#F5C400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">contato@pederecebe.com.br</div>
                  <div className="text-white/40 text-xs mt-0.5">Respondemos em até 2 horas úteis</div>
                </div>
              </a>
            </div>

            <div className="bg-amarelo/10 border border-amarelo/20 rounded-2xl p-5">
              <div className="text-amarelo font-semibold text-sm mb-1">Quer ver o produto ao vivo?</div>
              <p className="text-white/50 text-sm leading-relaxed">
                Agendamos uma demo de 20 minutos com um cardápio de exemplo do seu restaurante.
              </p>
            </div>
          </div>

          {/* Direita — formulário */}
          <div className="reveal">
            {enviado ? (
              <div className="bg-cinza-escuro border border-verde/20 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-verde/15 flex items-center justify-center mx-auto mb-6">
                  <IconCheck size={28} color="#22C55E" />
                </div>
                <h3 className="font-condensed text-3xl font-bold text-white mb-3">Mensagem enviada!</h3>
                <p className="text-white/50 text-base">
                  Nossa equipe vai responder em até 2 horas úteis pelo
                  WhatsApp que você informou.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cinza-escuro border border-white/10 rounded-2xl p-8 space-y-5"
              >
                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-nome" className="text-white/70 text-sm font-medium">
                    Seu nome <span className="text-amarelo" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="c-nome"
                    name="nome"
                    type="text"
                    placeholder="João Silva"
                    required
                    className="bg-cinza-medio border border-white/10 focus:border-amarelo/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-whatsapp" className="text-white/70 text-sm font-medium">
                    WhatsApp <span className="text-amarelo" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="c-whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="bg-cinza-medio border border-white/10 focus:border-amarelo/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                  />
                </div>

                {/* Nome do restaurante */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-restaurante" className="text-white/70 text-sm font-medium">
                    Nome do restaurante <span className="text-amarelo" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="c-restaurante"
                    name="restaurante"
                    type="text"
                    placeholder="Don Pizzaria"
                    required
                    className="bg-cinza-medio border border-white/10 focus:border-amarelo/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                  />
                </div>

                {/* Segmento */}
                <div className="flex flex-col gap-2">
                  <span className="text-white/70 text-sm font-medium">
                    Segmento{" "}
                    <span className="text-white/30 font-normal text-xs">(pode escolher mais de um)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SEGMENTOS.map((seg) => {
                      const ativo = segmentosSelecionados.includes(seg);
                      return (
                        <button
                          key={seg}
                          type="button"
                          onClick={() => toggleSegmento(seg)}
                          className="flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-xl border transition-all"
                          style={
                            ativo
                              ? { backgroundColor: "rgba(245,196,0,0.15)", borderColor: "rgba(245,196,0,0.5)", color: "#F5C400" }
                              : { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }
                          }
                        >
                          {ativo && (
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                          {seg}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-amarelo text-preto font-semibold py-4 rounded-xl hover:bg-amarelo-claro transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {enviando ? "Enviando..." : "Quero testar grátis"}
                </button>

                <p className="text-white/25 text-xs text-center">
                  Sem cartão de crédito. Cancele quando quiser.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
