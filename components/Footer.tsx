"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS_PRODUTO = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Planos e preços", href: "/#planos" },
];

const LINKS_EMPRESA = [
  { label: "Sobre nós", href: "/#" },
  { label: "Blog", href: "/#" },
  { label: "Contato", href: "/#contato" },
];

const LINKS_LEGAL = [
  { label: "Privacidade", href: "/#" },
  { label: "Termos de uso", href: "/#" },
];

export default function Footer() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <footer className="bg-amarelo border-t border-preto/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              {imgOk ? (
                <Image
                  src="/logo-pederecebe.png"
                  alt="Pede&Recebe"
                  width={829}
                  height={301}
                  className="h-10 w-auto object-contain"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <span className="font-condensed text-2xl font-bold text-preto">
                  Pede<span className="underline decoration-2">&amp;</span>Recebe
                </span>
              )}
            </div>
            <p className="text-preto/75 text-sm leading-relaxed mb-4">
              Pedidos pelo WhatsApp para restaurantes. API Oficial do Meta.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-preto/10 border border-preto/20 text-preto text-xs font-semibold px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#1A1209" aria-hidden="true">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Parceiro Oficial Meta Business
            </span>
          </div>

          <div>
            <h3 className="text-preto font-semibold mb-4 text-sm uppercase tracking-wider">
              Produto
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS_PRODUTO.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-preto/75 hover:text-preto text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-preto font-semibold mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS_EMPRESA.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-preto/75 hover:text-preto text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-preto font-semibold mb-4 text-sm uppercase tracking-wider">
              Fale conosco
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511999999999"
                className="text-preto/75 hover:text-preto text-sm transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1A1209" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:contato@pederecebe.com.br"
                className="text-preto/75 hover:text-preto text-sm transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contato@pederecebe.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-preto/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-preto/70 text-sm" suppressHydrationWarning>
            {`© ${new Date().getFullYear()} Pede&Recebe. Todos os direitos reservados.`}
          </p>
          <div className="flex items-center gap-6">
            {LINKS_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-preto/50 hover:text-preto text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://uply.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="text-preto text-xs">Desenvolvido por</span>
            <Image
              src="/uply-logo.png"
              alt="Uply Digital"
              width={60}
              height={20}
              className="h-[18px] w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
