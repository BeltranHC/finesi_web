"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-blue-900 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-950 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 finesi@universidad.edu.pe</span>
            <span>📞 +51 123 456 789</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/intranet" className="hover:text-blue-300 transition">
              Intranet
            </Link>
            <Link href="/biblioteca" className="hover:text-blue-300 transition">
              Biblioteca Virtual
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">FI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">FINESI</h1>
              <p className="text-xs text-blue-200">
                Ingeniería Estadística e Informática
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-300 transition font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-blue-300 transition"
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
