import Link from "next/link";
import { teachersService } from "@/lib/services";
import type { Teacher } from "@/types";

async function getTeachers(): Promise<Teacher[]> {
  try {
    return await teachersService.getAll();
  } catch {
    return [];
  }
}

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestros Docentes</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Conoce a nuestro equipo de profesionales altamente calificados,
            comprometidos con la excelencia académica.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {teachers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay docentes disponibles en este momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher) => (
                <article
                  key={teacher.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="h-48 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {teacher.imageUrl ? (
                      <img
                        src={teacher.imageUrl}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl">👨‍🏫</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1 text-gray-800">
                      {teacher.name}
                    </h2>
                    <p className="text-blue-600 font-medium mb-2">
                      {teacher.position}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {teacher.email}
                    </p>
                    
                    {teacher.specialties && teacher.specialties.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                          Especialidades:
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {teacher.specialties.slice(0, 3).map((specialty) => (
                            <span
                              key={specialty}
                              className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {teacher.bio && (
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {teacher.bio}
                      </p>
                    )}

                    <Link
                      href={`/docentes/${teacher.id}`}
                      className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Ver perfil completo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-900">30+</p>
              <p className="text-gray-600">Docentes</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">15+</p>
              <p className="text-gray-600">Doctores</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">100+</p>
              <p className="text-gray-600">Publicaciones</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">20+</p>
              <p className="text-gray-600">Años de experiencia promedio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
