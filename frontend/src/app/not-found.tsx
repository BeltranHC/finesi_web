import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-blue-900 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra
          ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  );
}
