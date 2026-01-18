import { notFound } from "next/navigation";
import Link from "next/link";
import { careersService } from "@/lib/services";
import type { Career } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getCareer(slug: string): Promise<Career | null> {
  try {
    return await careersService.getBySlug(slug);
  } catch {
    return null;
  }
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const career = await getCareer(slug);

  if (!career) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/carreras" className="text-blue-200 hover:text-white">
              Carreras
            </Link>
            <span className="mx-2">→</span>
            <span>{career.name}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">{career.name}</h1>
          {career.degree && (
            <p className="text-xl text-blue-100">
              Grado: {career.degree}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Descripción
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {career.description}
              </p>

              {career.curriculum && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Plan de Estudios
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                    {career.curriculum}
                  </p>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-4">
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  Información
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Duración: {career.duration} semestres</span>
                  </li>
                  {career.degree && (
                    <li className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>Grado: {career.degree}</span>
                    </li>
                  )}
                </ul>

                {career.skills && career.skills.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold mt-6 mb-4 text-gray-800">
                      Competencias
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <Link
                  href="/admision"
                  className="block mt-6 bg-blue-900 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Postula Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
