import { notFound } from "next/navigation";
import Link from "next/link";
import { teachersService } from "@/lib/services";
import type { Teacher } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTeacher(id: string): Promise<Teacher | null> {
  try {
    return await teachersService.getById(id);
  } catch {
    return null;
  }
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { id } = await params;
  const teacher = await getTeacher(id);

  if (!teacher) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/docentes" className="text-blue-200 hover:text-white">
              Docentes
            </Link>
            <span className="mx-2">→</span>
            <span>{teacher.name}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-2">{teacher.name}</h1>
          <p className="text-xl text-blue-100">{teacher.position}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-4">
                <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-6 overflow-hidden">
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

                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  Información de Contacto
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <a
                      href={`mailto:${teacher.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {teacher.email}
                    </a>
                  </li>
                  {teacher.phone && (
                    <li className="flex items-center gap-2">
                      <span>📞</span>
                      <span>{teacher.phone}</span>
                    </li>
                  )}
                  {teacher.office && (
                    <li className="flex items-center gap-2">
                      <span>🏢</span>
                      <span>{teacher.office}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              {teacher.bio && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Biografía
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {teacher.bio}
                  </p>
                </>
              )}

              {teacher.specialties && teacher.specialties.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Áreas de Especialización
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {teacher.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {teacher.education && teacher.education.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Formación Académica
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {teacher.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600">🎓</span>
                        <span className="text-gray-600">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {teacher.publications && teacher.publications.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Publicaciones
                  </h2>
                  <ul className="space-y-3">
                    {teacher.publications.map((pub, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600">📄</span>
                        <span className="text-gray-600">{pub}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
