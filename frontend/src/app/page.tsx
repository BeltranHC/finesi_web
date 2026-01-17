import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Facultad de Ingeniería Estadística e Informática
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Formamos profesionales de excelencia en ciencia de datos,
              estadística e ingeniería de sistemas, preparados para resolver los
              desafíos del mundo digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admision"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Proceso de Admisión
              </Link>
              <Link
                href="/carreras"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Conoce Nuestras Carreras
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-900">1500+</p>
              <p className="text-gray-600">Estudiantes</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">80+</p>
              <p className="text-gray-600">Docentes</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">3</p>
              <p className="text-gray-600">Carreras Profesionales</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">50+</p>
              <p className="text-gray-600">Años de Trayectoria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestras Carreras Profesionales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Estadística */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ingeniería Estadística
                </h3>
                <p className="text-gray-600 mb-4">
                  Forma profesionales capaces de aplicar métodos estadísticos
                  para la toma de decisiones basada en datos.
                </p>
                <Link
                  href="/carreras/estadistica"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>

            {/* Informática */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-green-600 to-green-800 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ingeniería Informática
                </h3>
                <p className="text-gray-600 mb-4">
                  Desarrolla soluciones tecnológicas innovadoras con enfoque en
                  inteligencia artificial y ciencia de datos.
                </p>
                <Link
                  href="/carreras/informatica"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>

            {/* Sistemas */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-6xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ingeniería de Sistemas
                </h3>
                <p className="text-gray-600 mb-4">
                  Diseña y gestiona sistemas de información para optimizar
                  procesos empresariales y organizacionales.
                </p>
                <Link
                  href="/carreras/sistemas"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Últimas Noticias
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-300"></div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    Eventos
                  </span>
                  <h3 className="text-lg font-bold mt-2 text-gray-800">
                    Conferencia Internacional de Ciencia de Datos 2026
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    La facultad organizará la conferencia más importante del
                    país sobre ciencia de datos y análisis estadístico.
                  </p>
                  <Link
                    href={`/noticias/${item}`}
                    className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:text-blue-800"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/noticias"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Ver Todas las Noticias
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para formar parte de FINESI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de futuros profesionales y comienza tu
            camino hacia el éxito en el mundo de la tecnología y los datos.
          </p>
          <Link
            href="/admision"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-100 transition"
          >
            Postula Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
