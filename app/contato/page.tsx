"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconWhatsapp, IconMail, IconCheck } from "@/components/ui/icons";

const CAMPOS = [
  { name: "nome", label: "Seu nome", type: "text", placeholder: "João Silva", required: true },
  { name: "email", label: "E-mail", type: "email", placeholder: "joao@restaurante.com.br", required: true },
  { name: "telefone", label: "WhatsApp / Telefone", type: "tel", placeholder: "(11) 99999-9999", required: true },
  { name: "restaurante", label: "Nome do restaurante", type: "text", placeholder: "Don Pizzaria", required: true },
];

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1200);
  }

  return (
    <>
      <section className="pt-28 pb-16 bg-cinza-escuro border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Contato</SectionLabel>
          <h1 className="font-condensed text-5xl sm:text-6xl font-bold text-white leading-none mt-2 mb-4">
            Fale com a gente
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tem dúvida sobre o produto, quer uma demonstração ou precisa de
            ajuda para migrar? Responderemos em até 2 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {enviado ? (
                <div className="bg-cinza-escuro border border-verde/20 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-verde/15 flex items-center justify-center mx-auto mb-6">
                    <IconCheck size={28} color="#22C55E" />
                  </div>
                  <h2 className="font-condensed text-3xl font-bold text-white mb-3">
                    Mensagem enviada!
                  </h2>
                  <p className="text-white/50 text-base">
                    Recebemos seu contato. Nossa equipe vai responder em até 2
                    horas úteis pelo e-mail ou WhatsApp que você informou.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-cinza-escuro border border-white/10 rounded-2xl p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {CAMPOS.map((campo) => (
                      <div key={campo.name} className="flex flex-col gap-1.5">
                        <label
                          htmlFor={campo.name}
                          className="text-white/70 text-sm font-medium"
                        >
                          {campo.label}
                          {campo.required && (
                            <span className="text-amarelo ml-1" aria-hidden="true">
                              *
                            </span>
                          )}
                        </label>
                        <input
                          id={campo.name}
                          name={campo.name}
                          type={campo.type}
                          placeholder={campo.placeholder}
                          required={campo.required}
                          className="bg-cinza-medio border border-white/10 focus:border-amarelo/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="mensagem"
                      className="text-white/70 text-sm font-medium"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte um pouco sobre seu restaurante e o que você precisa..."
                      rows={5}
                      className="bg-cinza-medio border border-white/10 focus:border-amarelo/50 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full bg-amarelo text-preto font-semibold py-4 rounded-xl hover:bg-amarelo-claro transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {enviando ? "Enviando..." : "Enviar mensagem"}
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    Ao enviar, você concorda com nossa{" "}
                    <a href="/privacidade" className="underline hover:text-white/50 transition-colors">
                      política de privacidade
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-condensed text-2xl font-bold text-white mb-6">
                  Outras formas de contato
                </h2>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/5511999999999"
                    className="flex items-start gap-4 bg-cinza-escuro border border-white/10 hover:border-verde/30 rounded-2xl p-5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-verde/10 flex items-center justify-center shrink-0 group-hover:bg-verde/20 transition-colors">
                      <IconWhatsapp size={20} color="#22C55E" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">
                        WhatsApp
                      </div>
                      <div className="text-white/50 text-sm">
                        (11) 99999-9999
                      </div>
                      <div className="text-verde text-xs mt-1 font-medium">
                        Resposta em minutos
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@pederecebe.com.br"
                    className="flex items-start gap-4 bg-cinza-escuro border border-white/10 hover:border-amarelo/30 rounded-2xl p-5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amarelo/10 flex items-center justify-center shrink-0 group-hover:bg-amarelo/20 transition-colors">
                      <IconMail size={20} color="#F5C400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">
                        E-mail
                      </div>
                      <div className="text-white/50 text-sm">
                        contato@pederecebe.com.br
                      </div>
                      <div className="text-white/30 text-xs mt-1">
                        Resposta em até 2 horas úteis
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-amarelo/10 border border-amarelo/20 rounded-2xl p-5">
                <div className="text-amarelo font-semibold text-sm mb-2">
                  Quer ver o produto ao vivo?
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Agendamos uma demonstração de 20 minutos onde você vê o
                  sistema funcionando com um cardápio de exemplo do seu
                  restaurante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
