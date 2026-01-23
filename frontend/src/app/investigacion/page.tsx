import Link from "next/link";
import {
  FlaskConical,
  BookOpen,
  Users,
  Award,
  FileText,
  ExternalLink,
  TrendingUp,
  Lightbulb,
  Database,
  Brain,
  BarChart3,
  Globe,
  Calendar,
  ArrowRight
} from "lucide-react";

const lineasInvestigacion = [
  {
    icon: Brain,
    titulo: "Inteligencia Artificial y Machine Learning",
    descripcion: "Desarrollo de algoritmos de aprendizaje automático, redes neuronales y sistemas inteligentes aplicados a diversos campos.",
    proyectos: 12,
    investigadores: 8
  },
  {
    icon: Database,
    titulo: "Ciencia de Datos y Big Data",
    descripcion: "Análisis de grandes volúmenes de datos, minería de datos y desarrollo de modelos predictivos para la toma de decisiones.",
    proyectos: 15,
    investigadores: 10
  },
  {
    icon: BarChart3,
    titulo: "Estadística Aplicada",
    descripcion: "Métodos estadísticos avanzados aplicados a la salud, agricultura, medio ambiente y ciencias sociales.",
    proyectos: 18,
    investigadores: 12
  },
  {
    icon: Globe,
    titulo: "Sistemas de Información Geográfica",
    descripcion: "Aplicación de tecnologías geoespaciales para el análisis territorial, gestión de recursos y planificación.",
    proyectos: 8,
    investigadores: 6
  },
  {
    icon: Lightbulb,
    titulo: "Innovación Tecnológica",
    descripcion: "Desarrollo de software, aplicaciones móviles y soluciones tecnológicas para problemas regionales.",
    proyectos: 10,
    investigadores: 7
  },
  {
    icon: TrendingUp,
    titulo: "Modelamiento y Simulación",
    descripcion: "Creación de modelos matemáticos y simulaciones computacionales para sistemas complejos.",
    proyectos: 6,
    investigadores: 5
  }
];

const gruposInvestigacion = [
  {
    nombre: "GRIDATA",
    nombreCompleto: "Grupo de Investigación en Ciencia de Datos",
    lider: "Dr. Carlos Mamani Flores",
    miembros: 12,
    publicaciones: 45,
    descripcion: "Investigación en análisis de datos, machine learning y aplicaciones de inteligencia artificial."
  },
  {
    nombre: "GIESTAD",
    nombreCompleto: "Grupo de Investigación en Estadística Aplicada",
    lider: "Dra. María López Quispe",
    miembros: 10,
    publicaciones: 62,
    descripcion: "Métodos estadísticos aplicados a la investigación científica y toma de decisiones."
  },
  {
    nombre: "GITEC",
    nombreCompleto: "Grupo de Investigación en Tecnologías de Información",
    lider: "Dr. Juan Pérez García",
    miembros: 8,
    publicaciones: 38,
    descripcion: "Desarrollo de sistemas de información, ingeniería de software y tecnologías emergentes."
  },
  {
    nombre: "GISIG",
    nombreCompleto: "Grupo de Investigación en Sistemas de Información Geográfica",
    lider: "Mg. Ana Torres Huanca",
    miembros: 6,
    publicaciones: 25,
    descripcion: "Aplicaciones de SIG, teledetección y análisis territorial."
  }
];

const publicacionesRecientes = [
  {
    titulo: "Machine Learning aplicado a la predicción de rendimiento académico en estudiantes universitarios",
    autores: "Mamani, C.; López, M.; Pérez, J.",
    revista: "Revista Latinoamericana de Informática Educativa",
    año: 2025,
    tipo: "Artículo"
  },
  {
    titulo: "Análisis estadístico multivariado del impacto del cambio climático en la agricultura altoandina",
    autores: "López, M.; Torres, A.; Quispe, R.",
    revista: "Journal of Agricultural Statistics",
    año: 2025,
    tipo: "Artículo"
  },
  {
    titulo: "Sistema inteligente de detección de fraudes en transacciones financieras usando Deep Learning",
    autores: "Pérez, J.; Mamani, C.; Huanca, L.",
    revista: "IEEE Latin America Transactions",
    año: 2024,
    tipo: "Artículo"
  },
  {
    titulo: "Desarrollo de un modelo predictivo para la gestión de recursos hídricos en la cuenca del Titicaca",
    autores: "Torres, A.; Condori, F.; López, M.",
    revista: "Water Resources Research",
    año: 2024,
    tipo: "Artículo"
  }
];

const estadisticas = [
  { valor: "50+", label: "Proyectos Activos", icon: FlaskConical },
  { valor: "120+", label: "Publicaciones", icon: FileText },
  { valor: "25+", label: "Investigadores", icon: Users },
  { valor: "15+", label: "Convenios", icon: Award },
];

const proyectosDestacados = [
  {
    titulo: "Plataforma de Monitoreo Ambiental del Lago Titicaca",
    descripcion: "Sistema basado en IoT y análisis de datos para monitorear la calidad del agua y biodiversidad del lago.",
    estado: "En ejecución",
    financiamiento: "CONCYTEC",
    periodo: "2024-2026"
  },
  {
    titulo: "Sistema de Alerta Temprana de Heladas para Agricultores",
    descripcion: "Aplicación móvil con modelos predictivos de machine learning para alertar sobre heladas en zonas rurales.",
    estado: "En ejecución",
    financiamiento: "FONDECYT",
    periodo: "2023-2025"
  },
  {
    titulo: "Análisis Predictivo de Deserción Estudiantil Universitaria",
    descripcion: "Modelo estadístico para identificar factores de riesgo y prevenir la deserción estudiantil.",
    estado: "Completado",
    financiamiento: "UNAP",
    periodo: "2022-2024"
  }
];

export default function InvestigacionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
                Generación de Conocimiento
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Investigación</h1>
              <p className="text-xl text-primary-200 max-w-3xl leading-relaxed">
                Impulsamos la investigación científica y tecnológica para contribuir al desarrollo
                de la región y el país, formando investigadores de alto nivel y generando conocimiento aplicado.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent-500/20 blur-3xl scale-90 group-hover:scale-110 transition-all duration-500"></div>
                <img
                  src="/logo-epiei.png"
                  alt="Escudo EPIEI"
                  className="relative w-56 h-56 xl:w-64 xl:h-64 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {estadisticas.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-neutral-50 rounded-2xl hover:bg-primary-50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary-700" />
                </div>
                <p className="text-3xl font-bold text-primary-900 mb-1">{stat.valor}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de Investigación */}
      <section className="py-20 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Áreas de Estudio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Líneas de Investigación
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nuestras principales áreas de investigación alineadas con las tendencias tecnológicas y las necesidades regionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lineasInvestigacion.map((linea, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <linea.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors">
                  {linea.titulo}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {linea.descripcion}
                </p>
                <div className="flex gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <FlaskConical className="w-4 h-4" />
                    {linea.proyectos} proyectos
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {linea.investigadores} investigadores
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grupos de Investigación */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Equipos de Trabajo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Grupos de Investigación
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Equipos multidisciplinarios dedicados a la investigación científica y tecnológica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gruposInvestigacion.map((grupo, index) => (
              <div
                key={index}
                className="group bg-neutral-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-neutral-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold mb-2">
                      {grupo.nombre}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-700 transition-colors">
                      {grupo.nombreCompleto}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {grupo.descripcion}
                </p>

                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span>Líder: {grupo.lider}</span>
                </div>

                <div className="flex gap-6 pt-4 border-t border-neutral-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-700">{grupo.miembros}</p>
                    <p className="text-xs text-neutral-500">Miembros</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-700">{grupo.publicaciones}</p>
                    <p className="text-xs text-neutral-500">Publicaciones</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-linear-to-b from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Impacto Social
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Proyectos de investigación con impacto en la sociedad y el desarrollo regional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {proyectosDestacados.map((proyecto, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${proyecto.estado === "En ejecución"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                    }`}>
                    {proyecto.estado}
                  </span>
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {proyecto.periodo}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-800 mb-3">
                  {proyecto.titulo}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {proyecto.descripcion}
                </p>

                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-xs text-neutral-500">Financiamiento:</span>
                  <span className="text-sm font-medium text-primary-700 ml-2">{proyecto.financiamiento}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicaciones Recientes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Producción Científica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Publicaciones Recientes
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Artículos científicos publicados por nuestros investigadores en revistas indexadas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {publicacionesRecientes.map((pub, index) => (
              <div
                key={index}
                className="group bg-neutral-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-neutral-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
                        {pub.tipo}
                      </span>
                      <span className="text-xs text-neutral-500">{pub.año}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors mb-2">
                      {pub.titulo}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-1">{pub.autores}</p>
                    <p className="text-sm text-neutral-500 italic">{pub.revista}</p>
                  </div>
                  <div className="shrink-0">
                    <button className="p-2 text-neutral-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              Ver Todas las Publicaciones
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Colaboración */}
      <section className="py-24 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Interesado en Colaborar?
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Estamos abiertos a colaboraciones con instituciones, empresas e investigadores
            para desarrollar proyectos de investigación conjuntos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 hover:scale-105 active:scale-95 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl"
            >
              <BookOpen className="w-6 h-6" />
              Contáctanos
            </Link>
            <Link
              href="#"
              className="group inline-flex items-center gap-3 border-2 border-primary-400 hover:border-accent-400 hover:bg-accent-400/10 hover:scale-105 active:scale-95 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <FileText className="w-6 h-6" />
              Descargar Portafolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
