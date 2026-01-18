import Link from "next/link";
import { careersService } from "@/lib/services";
import type { Career } from "@/types";

const careerIcons: Record<string, string> = {
  estadistica: "📊",
  informatica: "💻",
  sistemas: "🔧",
};

const careerColors: Record<string, string> = {
  estadistica: "from-blue-600 to-blue-800",
  informatica: "from-green-600 to-green-800",
  sistemas: "from-purple-600 to-purple-800",
};

async function getCareers(): Promise<Career[]> {
  try {
    return await careersService.getAll();
  } catch {
    return [];
  }
}

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestras Carreras</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Formamos profesionales de excelencia preparados para liderar la
            transformación digital y la toma de decisiones basada en datos.
          </p>
        </div>
      </section>

      {/* Careers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {careers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay carreras disponibles en este momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {careers.map((career) => (
                <article
                  key={career.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  <div
                    className={`h-48 bg-linear-to-br ${
                      careerColors[career.slug] || "from-gray-600 to-gray-800"
                    } flex items-center justify-center`}
                  >
                    <span className="text-6xl group-hover:scale-110 transition-transform">
                      {careerIcons[career.slug] || "🎓"}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                      {career.name}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {career.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>📅 {career.duration} semestres</span>
                      {career.degree && <span>🎓 {career.degree}</span>}
                    </div>
                    {career.skills && career.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {career.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link
                      href={`/carreras/${career.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Ver más información →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¿Listo para comenzar tu carrera profesional?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de futuros profesionales en tecnología y
            análisis de datos.
          </p>
          <Link
            href="/admision"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Proceso de Admisión
          </Link>
        </div>
      </section>
    </div>
  );
}
