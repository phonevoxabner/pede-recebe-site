"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu, IconClose } from "@/components/ui/icons";

function Logo() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="flex items-center gap-2">
      {imgOk ? (
        <Image
          src="/logo-pederecebe.png"
          alt="Pede&Recebe"
          width={829}
          height={301}
          className="h-9 w-auto object-contain"
          priority
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="font-condensed text-xl font-bold text-preto">
          Pede<span className="underline decoration-2">&amp;</span>Recebe
        </span>
      )}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Como funciona",   href: "/#como-funciona"   },
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Planos",          href: "/#planos"          },
  { label: "Blog",            href: "/blog"             },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) return;
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    },
    [pathname]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-amarelo transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(26,18,9,0.12)]" : ""
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Pede&Recebe — Página inicial">
            <Logo />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-sm text-preto/70 hover:text-preto transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contato"
              onClick={(e) => handleAnchor(e, "/#contato")}
              className="text-sm text-preto/70 hover:text-preto transition-colors font-semibold"
            >
              Contato
            </a>
            <a
              href="/#planos"
              onClick={(e) => handleAnchor(e, "/#planos")}
              className="bg-preto text-amarelo font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-preto/80 transition-colors cta-pulse"
            >
              Testar grátis
            </a>
          </div>

          <button
            className="md:hidden text-preto p-2 rounded-lg hover:bg-preto/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-amarelo border-t border-preto/15">
          <div className="px-4 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-preto/80 hover:text-preto py-3 border-b border-preto/10 font-semibold transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={(e) => handleAnchor(e, "/#contato")}
              className="text-preto/80 hover:text-preto py-3 border-b border-preto/10 font-semibold transition-colors block"
            >
              Contato
            </a>
            <a
              href="/#planos"
              onClick={(e) => handleAnchor(e, "/#planos")}
              className="mt-3 bg-preto text-amarelo font-bold px-5 py-3 rounded-lg text-center hover:bg-preto/80 transition-colors cta-pulse block"
            >
              Testar grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
