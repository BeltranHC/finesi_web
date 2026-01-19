import Link from "next/link";
import { careersService } from "@/lib/services";
import type { Career } from "@/types";
import { BarChart3, Monitor, Settings, Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const careerIcons: Record<string, LucideIcon> = {
  estadistica: BarChart3,
  informatica: Monitor,
  sistemas: Settings,
};

const careerColors: Record<string, { gradient: string; iconBg: string }> = {
  estadistica: { gradient: "from-primary-600 to-primary-800", iconBg: "bg-primary-500" },
  informatica: { gradient: "from-accent-600 to-accent-800", iconBg: "bg-accent-500" },
  sistemas: { gradient: "from-primary-700 to-primary-900", iconBg: "bg-primary-600" },
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
      <section className="relative bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
            Formación Académica
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestras Carreras</h1>
          <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
            Formamos profesionales de excelencia preparados para liderar la
            transformación digital y la toma de decisiones basada en datos.
          </p>
        </div>
      </section>

      {/* Careers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {careers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-neutral-400" />
              </div>
              <p className="text-neutral-500 text-lg">
                No hay carreras disponibles en este momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {careers.map((career) => {
                const IconComponent = careerIcons[career.slug] || GraduationCap;
                const colors = careerColors[career.slug] || { gradient: "from-neutral-600 to-neutral-800", iconBg: "bg-neutral-500" };
                
                return (
                  <article
                    key={career.id}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
                  >
                    <div
                      className={`h-48 bg-linear-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                      <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h2 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors">
                        {career.name}
                      </h2>
                      <p className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed">
                        {career.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-neutral-500 mb-6">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          {career.duration} semestres
                        </span>
                        {career.degree && (
                          <span className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-primary-500" />
                            {career.degree}
                          </span>
                        )}
                      </div>
                      {career.skills && career.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {career.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        href={`/carreras/${career.slug}`}
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition group/link"
                      >
                        Ver más información 
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
              ¿Listo para comenzar tu carrera profesional?
            </h2>
            <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
              Únete a nuestra comunidad de futuros profesionales en tecnología y
              análisis de datos.
            </p>
            <Link
              href="/admision"
              className="inline-flex items-center gap-3 bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-900/20"
            >
              <GraduationCap className="w-5 h-5" />
              Proceso de Admisión
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
