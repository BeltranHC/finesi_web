import { 
  GraduationCap, 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  Calendar,
  Building,
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const historia = [
  {
    year: "1962",
    title: "Fundación",
    description: "Se crea la Universidad Nacional del Altiplano en Puno, sentando las bases de la educación superior en la región."
  },
  {
    year: "1983",
    title: "Creación de la Facultad",
    description: "Nace la Facultad de Ingeniería Estadística e Informática con la carrera de Ingeniería Estadística."
  },
  {
    year: "1995",
    title: "Ingeniería Informática",
    description: "Se implementa la carrera profesional de Ingeniería Informática, respondiendo a las demandas tecnológicas."
  },
  {
    year: "2005",
    title: "Ingeniería de Sistemas",
    description: "Se crea la carrera de Ingeniería de Sistemas para formar profesionales en gestión de tecnologías de información."
  },
  {
    year: "2020",
    title: "Acreditación",
    description: "Las carreras obtienen acreditación nacional por SINEACE, reconociendo la calidad educativa."
  },
  {
    year: "2024",
    title: "Modernización",
    description: "Implementación de laboratorios de última generación y actualización curricular con enfoque en IA y ciencia de datos."
  }
];

const valores = [
  {
    icon: Award,
    title: "Excelencia Académica",
    description: "Buscamos la mejora continua en todos nuestros procesos educativos y de investigación."
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Fomentamos la colaboración entre estudiantes, docentes y la comunidad académica."
  },
  {
    icon: Star,
    title: "Innovación",
    description: "Promovemos la creatividad y el desarrollo de soluciones tecnológicas innovadoras."
  },
  {
    icon: CheckCircle,
    title: "Integridad",
    description: "Actuamos con ética, transparencia y responsabilidad en todas nuestras actividades."
  },
  {
    icon: TrendingUp,
    title: "Compromiso Social",
    description: "Contribuimos al desarrollo sostenible de la región y el país mediante la formación de profesionales éticos."
  },
  {
    icon: BookOpen,
    title: "Investigación",
    description: "Impulsamos la generación de conocimiento científico y tecnológico aplicado."
  }
];

const estadisticas = [
  { valor: "40+", label: "Años de Trayectoria", icon: Calendar },
  { valor: "1500+", label: "Estudiantes Activos", icon: Users },
  { valor: "80+", label: "Docentes Calificados", icon: GraduationCap },
  { valor: "5000+", label: "Egresados", icon: Award },
];

const autoridades = [
  {
    nombre: "Dr. Juan Pérez García",
    cargo: "Decano de la Facultad",
    imagen: null
  },
  {
    nombre: "Mg. María López Quispe",
    cargo: "Directora de Escuela - Ing. Estadística",
    imagen: null
  },
  {
    nombre: "Dr. Carlos Mamani Flores",
    cargo: "Director de Escuela - Ing. Informática",
    imagen: null
  },
  {
    nombre: "Mg. Ana Torres Huanca",
    cargo: "Directora de Escuela - Ing. Sistemas",
    imagen: null
  }
];

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
            Conócenos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-primary-200 max-w-3xl leading-relaxed">
            La Facultad de Ingeniería Estadística e Informática de la Universidad Nacional del Altiplano 
            es referente en la formación de profesionales en ciencia de datos, tecnología e información en el sur del Perú.
          </p>
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

      {/* Misión y Visión */}
      <section className="py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Nuestra Misión</h2>
              <p className="text-neutral-600 leading-relaxed">
                Formar profesionales competentes en Ingeniería Estadística, Informática y de Sistemas, 
                con sólidos conocimientos científicos, tecnológicos y humanísticos, capaces de generar 
                soluciones innovadoras que contribuyan al desarrollo sostenible de la región y el país, 
                mediante la investigación, la extensión universitaria y la proyección social.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Nuestra Visión</h2>
              <p className="text-neutral-600 leading-relaxed">
                Ser una facultad líder y referente a nivel nacional e internacional en la formación 
                de profesionales en Ingeniería Estadística, Informática y de Sistemas, reconocida por 
                su excelencia académica, investigación de alto impacto, y compromiso con la innovación 
                tecnológica y el desarrollo social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Principios Institucionales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Los valores que guían nuestra labor académica y nos definen como institución.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="group p-6 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <valor.icon className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">{valor.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-linear-to-b from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Más de cuatro décadas formando profesionales de excelencia para el desarrollo del país.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>
            
            <div className="space-y-8">
              {historia.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow inline-block max-w-md">
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-primary-100 hidden lg:block z-10"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Liderazgo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Autoridades
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nuestro equipo directivo comprometido con la excelencia académica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {autoridades.map((autoridad, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-neutral-100"
              >
                <div className="w-24 h-24 bg-linear-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-1">{autoridad.nombre}</h3>
                <p className="text-primary-600 text-sm font-medium">{autoridad.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-20 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
                Instalaciones
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Infraestructura Moderna
              </h2>
              <p className="text-primary-200 leading-relaxed mb-8">
                Contamos con laboratorios de cómputo equipados con tecnología de última generación, 
                aulas multimedia, biblioteca especializada y espacios de trabajo colaborativo 
                para el desarrollo integral de nuestros estudiantes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-primary-200">6 Laboratorios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-primary-200">Biblioteca Especializada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-primary-200">Salas de Estudio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-primary-200">Aulas Multimedia</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-primary-700/50 rounded-xl flex items-center justify-center">
                <Building className="w-20 h-20 text-primary-300" />
              </div>
              <p className="text-center text-primary-300 mt-4 text-sm">
                Edificio de la Facultad de Ingeniería Estadística e Informática
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
