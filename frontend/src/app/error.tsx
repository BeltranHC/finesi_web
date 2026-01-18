"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Algo salió mal!
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo o
          regresa a la página principal.
        </p>
        {process.env.NODE_ENV === "development" && (
          <pre className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left text-sm text-red-800 max-w-lg mx-auto overflow-x-auto">
            {error.message}
          </pre>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
