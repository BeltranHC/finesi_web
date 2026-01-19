import Link from "next/link";
import { teachersService } from "@/lib/services";
import type { Teacher } from "@/types";
import { User, GraduationCap, BookOpen, FileText, Award, ArrowRight, Users } from "lucide-react";

async function getTeachers(): Promise<Teacher[]> {
  try {
    return await teachersService.getAll();
  } catch {
    return [];
  }
}

const stats = [
  { value: "30+", label: "Docentes", icon: Users },
  { value: "15+", label: "Doctores", icon: GraduationCap },
  { value: "100+", label: "Publicaciones", icon: FileText },
  { value: "20+", label: "Años de experiencia promedio", icon: Award },
];

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
            Equipo Académico
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Docentes</h1>
          <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
            Conoce a nuestro equipo de profesionales altamente calificados,
            comprometidos con la excelencia académica.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {teachers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-neutral-400" />
              </div>
              <p className="text-neutral-500 text-lg">
                No hay docentes disponibles en este momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher) => (
                <article
                  key={teacher.id}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
                >
                  <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center relative overflow-hidden">
                    {teacher.imageUrl ? (
                      <img
                        src={teacher.imageUrl}
                        alt={`${teacher.firstName} ${teacher.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-primary-100 rounded-2xl flex items-center justify-center">
                        <User className="w-12 h-12 text-primary-500" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1 text-neutral-800 group-hover:text-primary-700 transition-colors">
                      {teacher.firstName} {teacher.lastName}
                    </h2>
                    <p className="text-primary-600 font-medium mb-2">
                      {teacher.degree || teacher.category}
                    </p>
                    <p className="text-neutral-500 text-sm mb-4">
                      {teacher.email}
                    </p>
                    
                    {teacher.specialization && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
                          <BookOpen className="w-4 h-4 text-accent-600" />
                          Especialización:
                        </div>
                        <p className="text-accent-700 text-sm bg-accent-50 px-3 py-2 rounded-lg">
                          {teacher.specialization}
                        </p>
                      </div>
                    )}

                    {teacher.biography && (
                      <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                        {teacher.biography}
                      </p>
                    )}

                    <Link
                      href={`/docentes/${teacher.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition group/link"
                    >
                      Ver perfil completo 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-700" />
                </div>
                <p className="text-4xl font-bold text-primary-900 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
