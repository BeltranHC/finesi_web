export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-900 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 text-lg">Cargando...</p>
      </div>
    </div>
  );
}
