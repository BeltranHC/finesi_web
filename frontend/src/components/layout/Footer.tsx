import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">FINESI</h3>
            <p className="text-blue-200 text-sm">
              Facultad de Ingeniería Estadística e Informática, formando
              profesionales de excelencia en ciencia de datos, estadística e
              ingeniería de sistemas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link href="/admision" className="hover:text-white transition">
                  Admisión
                </Link>
              </li>
              <li>
                <Link href="/matricula" className="hover:text-white transition">
                  Matrícula
                </Link>
              </li>
              <li>
                <Link href="/becas" className="hover:text-white transition">
                  Becas
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites"
                  className="hover:text-white transition"
                >
                  Trámites
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4">Carreras</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link
                  href="/carreras/estadistica"
                  className="hover:text-white transition"
                >
                  Ingeniería Estadística
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras/informatica"
                  className="hover:text-white transition"
                >
                  Ingeniería Informática
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras/sistemas"
                  className="hover:text-white transition"
                >
                  Ingeniería de Sistemas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Av. Universidad 123, Ciudad Universitaria</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>finesi@universidad.edu.pe</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+51 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} FINESI - Todos los derechos reservados
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
