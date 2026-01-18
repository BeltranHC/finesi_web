export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-3",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-blue-900 border-t-transparent ${sizeClasses[size]}`}
    />
  );
}

export function LoadingCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
}

export function LoadingCardsGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600 text-lg">Cargando...</p>
      </div>
    </div>
  );
}
