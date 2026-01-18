import { notFound } from "next/navigation";
import Link from "next/link";
import { newsService } from "@/lib/services";
import type { News } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getNewsItem(id: string): Promise<News | null> {
  try {
    return await newsService.getById(id);
  } catch {
    return null;
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/noticias" className="text-blue-200 hover:text-white">
              Noticias
            </Link>
            <span className="mx-2">→</span>
            <span className="line-clamp-1">{newsItem.title}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <span>
              📅 {formatDate(newsItem.publishedAt || newsItem.createdAt)}
            </span>
            {newsItem.category && (
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">
                {newsItem.category}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {newsItem.imageUrl && (
              <img
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className="w-full h-80 object-cover rounded-xl mb-8"
              />
            )}

            <article className="prose prose-lg max-w-none">
              {newsItem.content ? (
                <div
                  className="text-gray-600 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
              ) : (
                <p className="text-gray-600">
                  {newsItem.excerpt || "Sin contenido disponible."}
                </p>
              )}
            </article>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t">
              <Link
                href="/noticias"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                ← Volver a noticias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Compartir esta noticia:</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Facebook
            </button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
              Twitter
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
