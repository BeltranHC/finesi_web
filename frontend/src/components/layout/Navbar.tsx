"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/carreras", label: "Carreras" },
    { href: "/docentes", label: "Docentes" },
    { href: "/investigacion", label: "Investigación" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-primary-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-950 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2 text-primary-200">
              <Mail className="w-4 h-4" />
              finesi@universidad.edu.pe
            </span>
            <span className="flex items-center gap-2 text-primary-200">
              <Phone className="w-4 h-4" />
              +51 951 627 530
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://campus.unap.edu.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition text-primary-200"
            >
              Intranet
            </a>
            <a
              href="https://biblioteca.unap.edu.pe/opac_css/index.php?lvl=section_see&location=19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition text-primary-200"
            >
              Biblioteca Virtual
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow overflow-hidden p-1">
              <img
                src="/logo-epiei.png"
                alt="Logo EPIEI"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">FINESI</h1>
              <p className="text-xs text-primary-300">
                Ingeniería Estadística e Informática
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${isActiveLink(link.href)
                      ? "bg-accent-500 text-white shadow-md"
                      : "hover:bg-primary-800 hover:text-accent-400"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary-800 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-1 pb-4 border-t border-primary-800 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition ${isActiveLink(link.href)
                      ? "bg-accent-500 text-white"
                      : "hover:bg-primary-800 hover:text-accent-400"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
