import Link from "next/link";
import { newsService } from "@/lib/services";
import type { News } from "@/types";

async function getNews(): Promise<News[]> {
  try {
    return await newsService.getAll();
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Noticias y Eventos</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Mantente informado sobre las últimas novedades, eventos académicos
            y logros de nuestra facultad.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay noticias disponibles en este momento.
              </p>
            </div>
          ) : (
            <>
              {/* Featured News */}
              {news[0] && (
                <article className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      {news[0].imageUrl ? (
                        <img
                          src={news[0].imageUrl}
                          alt={news[0].title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-8xl">📰</span>
                      )}
                    </div>
                    <div className="md:w-1/2 p-8">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                        Destacado
                      </span>
                      <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {news[0].title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news[0].excerpt || news[0].content?.substring(0, 200)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          {formatDate(news[0].publishedAt || news[0].createdAt)}
                        </span>
                        <Link
                          href={`/noticias/${news[0].id}`}
                          className="text-blue-600 font-semibold hover:text-blue-800"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Other News */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.slice(1).map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                  >
                    <div className="h-48 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-5xl group-hover:scale-110 transition-transform">
                          📰
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      {item.category && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-2">
                          {item.category}
                        </span>
                      )}
                      <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.excerpt || item.content?.substring(0, 100)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">
                          {formatDate(item.publishedAt || item.createdAt)}
                        </span>
                        <Link
                          href={`/noticias/${item.id}`}
                          className="text-blue-600 text-sm font-semibold hover:text-blue-800"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Suscríbete a nuestro boletín
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Recibe las últimas noticias y actualizaciones directamente en tu
            correo electrónico.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
