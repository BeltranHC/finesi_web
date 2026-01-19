import Link from "next/link";
import { newsService } from "@/lib/services";
import type { News } from "@/types";
import { Newspaper, Calendar, ArrowRight, Mail, Send } from "lucide-react";

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
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
            Actualidad
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Noticias y Eventos</h1>
          <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
            Mantente informado sobre las últimas novedades, eventos académicos
            y logros de nuestra facultad.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {news.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-neutral-400" />
              </div>
              <p className="text-neutral-500 text-lg">
                No hay noticias disponibles en este momento.
              </p>
            </div>
          ) : (
            <>
              {/* Featured News */}
              {news[0] && (
                <article className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center relative overflow-hidden">
                      {news[0].imageUrl ? (
                        <img
                          src={news[0].imageUrl}
                          alt={news[0].title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Newspaper className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2 p-10">
                      <span className="inline-block bg-accent-100 text-accent-700 text-sm px-4 py-1 rounded-full font-medium mb-6">
                        Destacado
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
                        {news[0].title}
                      </h2>
                      <p className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed">
                        {news[0].excerpt || news[0].content?.substring(0, 200)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-neutral-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {formatDate(news[0].publishedAt || news[0].createdAt)}
                        </span>
                        <Link
                          href={`/noticias/${news[0].id}`}
                          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition group"
                        >
                          Leer más 
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
                  >
                    <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center relative overflow-hidden">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-neutral-300 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Newspaper className="w-8 h-8 text-neutral-500" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      {item.category && (
                        <span className="inline-block bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
                          {item.category}
                        </span>
                      )}
                      <h2 className="text-lg font-bold mb-3 text-neutral-800 line-clamp-2 group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {item.excerpt || item.content?.substring(0, 100)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-neutral-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {formatDate(item.publishedAt || item.createdAt)}
                        </span>
                        <Link
                          href={`/noticias/${item.id}`}
                          className="inline-flex items-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-800 transition"
                        >
                          Leer más 
                          <ArrowRight className="w-4 h-4" />
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
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-accent-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Suscríbete a nuestro boletín
          </h2>
          <p className="text-primary-200 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Recibe las últimas noticias y actualizaciones directamente en tu
            correo electrónico.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-xl text-neutral-800 focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25"
            >
              <Send className="w-5 h-5" />
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
