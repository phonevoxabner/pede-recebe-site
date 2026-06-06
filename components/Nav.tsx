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
      {imgOk && (
        <Image
          src="/logo.png"
          alt=""
          width={36}
          height={36}
          className="rounded-lg"
          priority
          onError={() => setImgOk(false)}
        />
      )}
      <span className="font-condensed text-xl font-bold text-white">
        Pede<span className="text-amarelo">&amp;</span>Recebe
      </span>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Como funciona",  href: "/#como-funciona"   },
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Planos",          href: "/#planos"          },
  { label: "Blog",            href: "/blog"             },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth scroll para links de âncora ── */
  const handleAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) return;
      const id = href.slice(2); // remove "/#"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-preto/95 border-b border-amarelo/20"
          : "bg-transparent"
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Pede&Recebe — Página inicial">
            <Logo />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contato"
              onClick={(e) => handleAnchor(e, "/#contato")}
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              Contato
            </a>
            <a
              href="/#planos"
              onClick={(e) => handleAnchor(e, "/#planos")}
              className="bg-amarelo text-preto font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-amarelo-claro transition-colors"
            >
              Testar grátis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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
        <div className="md:hidden bg-cinza-escuro border-t border-white/10">
          <div className="px-4 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-white/80 hover:text-white py-3 border-b border-white/5 font-medium transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={(e) => handleAnchor(e, "/#contato")}
              className="text-white/80 hover:text-white py-3 border-b border-white/5 font-medium transition-colors block"
            >
              Contato
            </a>
            <a
              href="/#planos"
              onClick={(e) => handleAnchor(e, "/#planos")}
              className="mt-3 bg-amarelo text-preto font-semibold px-5 py-3 rounded-lg text-center hover:bg-amarelo-claro transition-colors block"
            >
              Testar grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
