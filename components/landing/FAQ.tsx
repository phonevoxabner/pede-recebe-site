"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionCTA from "@/components/ui/SectionCTA";
import { IconPlus } from "@/components/ui/icons";

const PERGUNTAS = [
  {
    pergunta: "Preciso de uma conta WhatsApp Business para usar o Pede&Recebe?",
    resposta: "Sim, você precisa de um número de telefone para vincular à API Oficial do WhatsApp. Nós cuidamos de todo o processo de aprovação e configuração junto ao Meta. Você não precisa entender nada técnico, apenas fornecer o número.",
  },
  {
    pergunta: "Qual é a diferença entre a API Oficial e outros sistemas?",
    resposta: "Sistemas não-oficiais funcionam simulando um usuário humano no WhatsApp, o que viola os termos de uso do Meta. O WhatsApp identifica esse comportamento e bloqueia o número. A API Oficial é uma integração autorizada diretamente com o Meta. Seu número nunca será banido por usar nossa plataforma.",
  },
  {
    pergunta: "Funciona em qualquer navegador, inclusive no celular?",
    resposta: "Sim. O Pede&Recebe é 100% baseado em navegador. Funciona no Chrome, Safari, Firefox, em computadores, tablets e celulares. Você pode atender pedidos de qualquer lugar, sem instalar nenhum aplicativo.",
  },
  {
    pergunta: "Funciona junto com o iFood também?",
    resposta: "Sim, você pode usar o Pede&Recebe junto com o iFood. Muitos de nossos clientes mantêm os dois canais ativos. O objetivo é que você tenha um canal direto com seus clientes, sem pagar comissão de 20% a 30% ao iFood em cada pedido.",
  },
  {
    pergunta: "Quanto tempo leva para configurar e começar a receber pedidos?",
    resposta: "Em média 10 a 15 minutos para criar sua conta, cadastrar o cardápio básico e vincular o número de WhatsApp. Você começa a receber pedidos no mesmo dia.",
  },
  {
    pergunta: "Posso cancelar quando quiser? Tem multa ou fidelidade?",
    resposta: "Sem multa, sem fidelidade, sem burocracia. Você cancela quando quiser, direto pelo painel. Não cobramos nada após o cancelamento. Sua única obrigação é usar o serviço enquanto faz sentido para você.",
  },
];

function FAQItem({ pergunta, resposta, index }: { pergunta: string; resposta: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span className="text-preto font-medium text-sm sm:text-base pr-4 group-hover:text-amarelo transition-colors">
          {pergunta}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
            open ? "bg-amarelo text-preto rotate-45" : "bg-gray-100 text-preto/70"
          }`}
          aria-hidden="true"
        >
          <IconPlus size={16} />
        </div>
      </button>
      <div
        id={`faq-${index}`}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-preto/75 text-sm leading-relaxed pb-5 pr-12">{resposta}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-amarelo">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel onYellow>Perguntas frequentes</SectionLabel>
          <h2 className="font-condensed text-4xl sm:text-5xl font-bold text-preto leading-tight mt-2">
            Tire suas dúvidas
          </h2>
        </div>

        <div className="bg-white border-2 border-preto rounded-2xl px-6">
          {PERGUNTAS.map((item, i) => (
            <FAQItem key={item.pergunta} pergunta={item.pergunta} resposta={item.resposta} index={i} />
          ))}
        </div>

        <SectionCTA onYellow texto="Ficou com alguma dúvida? Nossa equipe responde em minutos." botao="Falar com a gente" />
      </div>
    </section>
  );
}
