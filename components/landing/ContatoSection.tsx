"use client";

import { useState, useRef, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconCheck } from "@/components/ui/icons";

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
  const [segmentoAberto, setSegmentoAberto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickFora(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSegmentoAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  function toggleSegmento(seg: string) {
    setSegmentosSelecionados((prev) =>
      prev.includes(seg) ? prev.filter((s) => s !== seg) : [...prev, seg]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => { setEnviando(false); setEnviado(true); }, 1200);
  }

  const inputClass = "bg-white border-2 border-preto rounded-xl px-4 py-3 text-preto font-medium text-sm placeholder-preto/40 outline-none focus:ring-2 focus:ring-preto/30 transition-all w-full";

  return (
    <section id="contato" className="py-16 lg:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 reveal">
          <SectionLabel>Contato</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2 mb-3">
            Fale com a gente
          </h2>
          <p className="text-preto/70 text-lg max-w-xl mx-auto">
            Respondemos em até 2 horas úteis. Sem cartão de crédito, sem burocracia.
          </p>
        </div>

        <div className="max-w-lg mx-auto reveal">
          {enviado ? (
            <div className="bg-amarelo border-2 border-preto rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-preto flex items-center justify-center mx-auto mb-6">
                <IconCheck size={28} color="#F5C400" />
              </div>
              <h3 className="font-condensed text-3xl font-bold text-preto mb-3">Mensagem enviada!</h3>
              <p className="text-preto/70 text-base">
                Nossa equipe vai responder em até 2 horas úteis pelo WhatsApp que você informou.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-amarelo border-2 border-preto rounded-2xl p-7 space-y-5">

              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-nome" className="text-preto font-semibold text-sm">
                  Seu nome <span className="text-preto/40" aria-hidden="true">*</span>
                </label>
                <input
                  id="c-nome" name="nome" type="text" placeholder="João Silva" required
                  className={inputClass}
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-whatsapp" className="text-preto font-semibold text-sm">
                  WhatsApp <span className="text-preto/40" aria-hidden="true">*</span>
                </label>
                <input
                  id="c-whatsapp" name="whatsapp" type="tel" placeholder="(11) 99999-9999" required
                  className={inputClass}
                />
              </div>

              {/* Nome do restaurante */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-restaurante" className="text-preto font-semibold text-sm">
                  Nome do restaurante <span className="text-preto/40" aria-hidden="true">*</span>
                </label>
                <input
                  id="c-restaurante" name="restaurante" type="text" placeholder="Don Pizzaria" required
                  className={inputClass}
                />
              </div>

              {/* Segmento — dropdown colapsável */}
              <div className="flex flex-col gap-1.5" ref={dropdownRef}>
                <span className="text-preto font-semibold text-sm">Segmento</span>
                <div className="relative">
                  {/* Trigger */}
                  <button
                    type="button"
                    onClick={() => setSegmentoAberto((v) => !v)}
                    className="w-full flex items-center justify-between gap-2 bg-white border-2 border-preto rounded-xl px-4 py-3 text-sm font-medium text-left transition-all focus:outline-none focus:ring-2 focus:ring-preto/30"
                  >
                    <span className={segmentosSelecionados.length > 0 ? "text-preto" : "text-preto/40"}>
                      {segmentosSelecionados.length === 0
                        ? "Selecione o tipo do seu negócio"
                        : segmentosSelecionados.join(", ")}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      {segmentosSelecionados.length > 0 && (
                        <span className="bg-preto text-amarelo text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                          {segmentosSelecionados.length}
                        </span>
                      )}
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#1A1209" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-200"
                        style={{ transform: segmentoAberto ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown list */}
                  {segmentoAberto && (
                    <div
                      className="absolute left-0 right-0 top-full mt-1 bg-white border-2 border-preto rounded-xl z-20 overflow-hidden shadow-lg"
                      style={{ maxHeight: 220, overflowY: "auto" }}
                    >
                      {SEGMENTOS.map((seg, i) => {
                        const ativo = segmentosSelecionados.includes(seg);
                        return (
                          <button
                            key={seg}
                            type="button"
                            onClick={() => toggleSegmento(seg)}
                            className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-left transition-colors ${
                              i < SEGMENTOS.length - 1 ? "border-b border-preto/10" : ""
                            } ${ativo ? "bg-preto text-amarelo" : "text-preto hover:bg-preto/5"}`}
                          >
                            <span
                              className="w-4 h-4 rounded flex items-center justify-center shrink-0 border-2 transition-colors"
                              style={{
                                borderColor: ativo ? "#F5C400" : "#1A1209",
                                backgroundColor: ativo ? "#F5C400" : "transparent",
                              }}
                            >
                              {ativo && (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1A1209" strokeWidth="3.5">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </span>
                            {seg}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="cta-pulse w-full bg-preto text-amarelo font-bold py-4 rounded-xl border-2 border-preto hover:bg-preto/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base mt-2"
              >
                {enviando ? "Enviando..." : "Quero testar grátis"}
              </button>

              <p className="text-preto/50 text-xs text-center">
                Sem cartão de crédito. Cancele quando quiser.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
