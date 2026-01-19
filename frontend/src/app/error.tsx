"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="w-24 h-24 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-amber-600" />
        </div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          ¡Algo salió mal!
        </h1>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo o
          regresa a la página principal.
        </p>
        {process.env.NODE_ENV === "development" && (
          <pre className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-left text-sm text-red-800 max-w-lg mx-auto overflow-x-auto">
            {error.message}
          </pre>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-primary-900/20"
          >
            <RefreshCw className="w-5 h-5" />
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-6 py-3 rounded-xl font-semibold transition"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
