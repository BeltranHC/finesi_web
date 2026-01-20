import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold">FINESI</h3>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed">
              Facultad de Ingeniería Estadística e Informática, formando
              profesionales de excelencia en ciencia de datos, estadística e
              ingeniería de sistemas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/admision" className="text-primary-300 hover:text-accent-400 transition flex items-center gap-2">
                  Admisión
                </Link>
              </li>
              <li>
                <Link href="/matricula" className="text-primary-300 hover:text-accent-400 transition flex items-center gap-2">
                  Matrícula
                </Link>
              </li>
              <li>
                <Link href="/becas" className="text-primary-300 hover:text-accent-400 transition flex items-center gap-2">
                  Becas
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites"
                  className="text-primary-300 hover:text-accent-400 transition flex items-center gap-2"
                >
                  Trámites
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Carreras</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/carreras/estadistica"
                  className="text-primary-300 hover:text-accent-400 transition"
                >
                  Ingeniería Estadística
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras/informatica"
                  className="text-primary-300 hover:text-accent-400 transition"
                >
                  Ingeniería Informática
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras/sistemas"
                  className="text-primary-300 hover:text-accent-400 transition"
                >
                  Ingeniería de Sistemas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-primary-300">
                <MapPin className="w-5 h-5 mt-0.5 text-accent-500 shrink-0" />
                <span>Av. Universidad 123, Ciudad Universitaria</span>
              </li>
              <li className="flex items-center gap-3 text-primary-300">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <span>finesi@universidad.edu.pe</span>
              </li>
              <li className="flex items-center gap-3 text-primary-300">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <span>+51 951 627 530</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-400">
            © {new Date().getFullYear()} FINESI - Todos los derechos reservados
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-800 hover:bg-accent-600 rounded-lg flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-800 hover:bg-accent-600 rounded-lg flex items-center justify-center transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-800 hover:bg-accent-600 rounded-lg flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
