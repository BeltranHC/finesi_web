import Link from "next/link";
import { 
  BarChart3, 
  Monitor, 
  Settings, 
  Users, 
  GraduationCap, 
  BookOpen,
  Clock,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const careers = [
  {
    slug: "estadistica",
    name: "Ingeniería Estadística",
    description: "Forma profesionales capaces de aplicar métodos estadísticos para la toma de decisiones basada en datos.",
    icon: BarChart3,
    gradient: "from-primary-600 to-primary-800",
    iconBg: "bg-primary-500"
  },
  {
    slug: "informatica",
    name: "Ingeniería Informática",
    description: "Desarrolla soluciones tecnológicas innovadoras con enfoque en inteligencia artificial y ciencia de datos.",
    icon: Monitor,
    gradient: "from-accent-600 to-accent-800",
    iconBg: "bg-accent-500"
  },
  {
    slug: "sistemas",
    name: "Ingeniería de Sistemas",
    description: "Diseña y gestiona sistemas de información para optimizar procesos empresariales y organizacionales.",
    icon: Settings,
    gradient: "from-primary-700 to-primary-900",
    iconBg: "bg-primary-600"
  }
];

const stats = [
  { value: "1500+", label: "Estudiantes", icon: Users },
  { value: "80+", label: "Docentes", icon: GraduationCap },
  { value: "3", label: "Carreras Profesionales", icon: BookOpen },
  { value: "50+", label: "Años de Trayectoria", icon: Clock },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
              Universidad Nacional del Altiplano
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Facultad de Ingeniería Estadística e Informática
            </h1>
            <p className="text-xl text-primary-200 mb-10 leading-relaxed">
              Formamos profesionales de excelencia en ciencia de datos,
              estadística e ingeniería de sistemas, preparados para resolver los
              desafíos del mundo digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admision"
                className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25 flex items-center gap-2"
              >
                Proceso de Admisión
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/carreras"
                className="border-2 border-primary-400 hover:border-accent-400 hover:bg-accent-400/10 px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                Conoce Nuestras Carreras
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
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

      {/* Careers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Formación Académica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nuestras Carreras Profesionales
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Elige la carrera que mejor se adapte a tus intereses y comienza tu camino hacia el éxito profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careers.map((career) => (
              <article 
                key={career.slug}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className={`h-48 bg-gradient-to-br ${career.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div className={`${career.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <career.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors">
                    {career.name}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {career.description}
                  </p>
                  <Link
                    href={`/carreras/${career.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition group/link"
                  >
                    Más información 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Actualidad
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Últimas Noticias
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Mantente al día con los eventos, logros y novedades de nuestra facultad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-neutral-100"
              >
                <div className="h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-neutral-400" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
                    Eventos
                  </span>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                    Conferencia Internacional de Ciencia de Datos 2026
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    La facultad organizará la conferencia más importante del
                    país sobre ciencia de datos y análisis estadístico.
                  </p>
                  <Link
                    href={`/noticias/${item}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-800 transition"
                  >
                    Leer más 
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary-900/20"
            >
              Ver Todas las Noticias
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para formar parte de FINESI?
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Únete a nuestra comunidad de futuros profesionales y comienza tu
            camino hacia el éxito en el mundo de la tecnología y los datos.
          </p>
          <Link
            href="/admision"
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-accent-500/25"
          >
            <GraduationCap className="w-6 h-6" />
            Postula Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
