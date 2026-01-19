import Link from "next/link";
import { FileQuestion, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-primary-900 mb-4">404</div>
        <div className="w-24 h-24 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="w-12 h-12 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Página no encontrada
        </h1>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra
          ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-primary-900/20"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-6 py-3 rounded-xl font-semibold transition"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  );
}
