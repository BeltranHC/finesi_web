import Link from "next/link";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  showHomeLink?: boolean;
}

export function ErrorMessage({
  title = "Ha ocurrido un error",
  message = "Por favor, intenta de nuevo más tarde.",
  showRetry = true,
  onRetry,
  showHomeLink = true,
}: ErrorMessageProps) {
  return (
    <div className="text-center py-12 px-4">
      <div className="text-5xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {showRetry && onRetry && (
          <button
            onClick={onRetry}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Intentar de nuevo
          </button>
        )}
        {showHomeLink && (
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Ir al inicio
          </Link>
        )}
      </div>
    </div>
  );
}

interface EmptyStateProps {
  icon?: string;
  title: string;
  message?: string;
  action?: {
    label: string;
    href: string;
  };
}

export function EmptyState({
  icon = "📭",
  title,
  message,
  action,
}: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      {message && (
        <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>
      )}
      {action && (
        <Link
          href={action.href}
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
