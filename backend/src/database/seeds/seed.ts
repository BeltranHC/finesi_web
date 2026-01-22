import { DataSource } from 'typeorm';
import { hash } from 'bcrypt';
import { User, UserRole } from '../../users/entities/user.entity';
import { Career } from '../../careers/entities/career.entity';
import { News, NewsCategory } from '../../news/entities/news.entity';
import { Teacher, TeacherCategory } from '../../teachers/entities/teacher.entity';

export async function seedDatabase(dataSource: DataSource): Promise<void> {
  const userRepository = dataSource.getRepository(User);
  const careerRepository = dataSource.getRepository(Career);
  const newsRepository = dataSource.getRepository(News);
  const teacherRepository = dataSource.getRepository(Teacher);

  // Check if already seeded
  const existingAdmin = await userRepository.findOne({
    where: { email: 'admin@finesi.edu.pe' },
  });

  if (existingAdmin) {
    console.log('Database already seeded, skipping...');
    return;
  }

  console.log('Seeding database...');

  // Create admin user
  const adminPassword = await hash('admin123', 10);
  const admin = userRepository.create({
    email: 'admin@finesi.edu.pe',
    password: adminPassword,
    firstName: 'Administrador',
    lastName: 'FINESI',
    role: UserRole.ADMIN,
    isActive: true,
  });
  await userRepository.save(admin);
  console.log('Admin user created');

  // Create careers
  const careers = [
    {
      name: 'Ingeniería Estadística',
      slug: 'estadistica',
      description:
        'Forma profesionales capaces de aplicar métodos estadísticos avanzados para la toma de decisiones basada en datos. Los egresados dominan técnicas de análisis cuantitativo, modelamiento estadístico y ciencia de datos.',
      duration: 10,
      degree: 'Ingeniero Estadístico',
      skills: [
        'Análisis de datos',
        'Modelamiento estadístico',
        'Machine Learning',
        'R y Python',
        'Visualización de datos',
      ],
      isActive: true,
    },
    {
      name: 'Ingeniería Informática',
      slug: 'informatica',
      description:
        'Desarrolla soluciones tecnológicas innovadoras con enfoque en inteligencia artificial, desarrollo de software y sistemas de información. Prepara profesionales para liderar la transformación digital.',
      duration: 10,
      degree: 'Ingeniero Informático',
      skills: [
        'Desarrollo de software',
        'Inteligencia Artificial',
        'Bases de datos',
        'Cloud Computing',
        'Arquitectura de sistemas',
      ],
      isActive: true,
    },
    {
      name: 'Ingeniería de Sistemas',
      slug: 'sistemas',
      description:
        'Diseña y gestiona sistemas de información para optimizar procesos empresariales y organizacionales. Enfocado en la integración de tecnología con las necesidades del negocio.',
      duration: 10,
      degree: 'Ingeniero de Sistemas',
      skills: [
        'Gestión de proyectos',
        'Análisis de sistemas',
        'ERP y CRM',
        'Redes y seguridad',
        'Transformación digital',
      ],
      isActive: true,
    },
  ];

  for (const careerData of careers) {
    const career = careerRepository.create(careerData);
    await careerRepository.save(career);
  }
  console.log('Careers created');

  // Get saved careers to link with teachers
  const savedCareers = await careerRepository.find();
  const estadisticaCareer = savedCareers.find(c => c.slug === 'estadistica');
  const informaticaCareer = savedCareers.find(c => c.slug === 'informatica');
  const sistemasCareer = savedCareers.find(c => c.slug === 'sistemas');

  // Create sample teachers (placeholder data - will be replaced with real data)
  const teachers = [
    {
      firstName: 'Juan Carlos',
      lastName: 'Quispe Mamani',
      email: 'jquispe@unap.edu.pe',
      phone: '+51 951 000 001',
      category: TeacherCategory.PRINCIPAL,
      degree: 'Dr. en Estadística',
      specialization: 'Análisis Multivariante y Minería de Datos',
      biography: 'Director de la Escuela Profesional con más de 20 años de experiencia en docencia e investigación estadística.',
      courses: ['Estadística Inferencial', 'Análisis Multivariante', 'Minería de Datos'],
      officeHours: 'Lunes a Viernes 9:00 - 12:00',
      career: estadisticaCareer,
      isActive: true,
    },
    {
      firstName: 'María Elena',
      lastName: 'Huanca Flores',
      email: 'mhuanca@unap.edu.pe',
      phone: '+51 951 000 002',
      category: TeacherCategory.PRINCIPAL,
      degree: 'Dra. en Informática',
      specialization: 'Inteligencia Artificial y Machine Learning',
      biography: 'Coordinadora de Investigación con especialización en sistemas inteligentes y procesamiento de datos.',
      courses: ['Inteligencia Artificial', 'Machine Learning', 'Procesamiento de Lenguaje Natural'],
      officeHours: 'Lunes a Viernes 14:00 - 17:00',
      career: informaticaCareer,
      isActive: true,
    },
    {
      firstName: 'Pedro',
      lastName: 'Condori Apaza',
      email: 'pcondori@unap.edu.pe',
      phone: '+51 951 000 003',
      category: TeacherCategory.ASSOCIATE,
      degree: 'Mg. en Ingeniería de Sistemas',
      specialization: 'Gestión de Proyectos de TI',
      biography: 'Coordinador Académico con experiencia en gestión de proyectos tecnológicos y desarrollo de software.',
      courses: ['Gestión de Proyectos', 'Ingeniería de Software', 'Arquitectura de Sistemas'],
      officeHours: 'Martes y Jueves 10:00 - 13:00',
      career: sistemasCareer,
      isActive: true,
    },
    {
      firstName: 'Rosa',
      lastName: 'Choque Vilca',
      email: 'rchoque@unap.edu.pe',
      phone: '+51 951 000 004',
      category: TeacherCategory.ASSOCIATE,
      degree: 'Mg. en Ciencia de Datos',
      specialization: 'Big Data y Visualización de Datos',
      biography: 'Especialista en análisis de grandes volúmenes de datos y técnicas avanzadas de visualización.',
      courses: ['Big Data', 'Visualización de Datos', 'Python para Data Science'],
      officeHours: 'Miércoles y Viernes 9:00 - 12:00',
      career: estadisticaCareer,
      isActive: true,
    },
    {
      firstName: 'Carlos',
      lastName: 'Mamani Ramos',
      email: 'cmamani@unap.edu.pe',
      phone: '+51 951 000 005',
      category: TeacherCategory.AUXILIARY,
      degree: 'Mg. en Seguridad Informática',
      specialization: 'Ciberseguridad y Redes',
      biography: 'Docente especializado en seguridad de la información y administración de redes.',
      courses: ['Seguridad Informática', 'Redes de Computadoras', 'Ethical Hacking'],
      officeHours: 'Lunes y Miércoles 15:00 - 18:00',
      career: informaticaCareer,
      isActive: true,
    },
  ];

  for (const teacherData of teachers) {
    const teacher = teacherRepository.create(teacherData);
    await teacherRepository.save(teacher);
  }
  console.log('Teachers created');


  // Create sample news
  const newsItems: Array<{
    title: string;
    content: string;
    excerpt: string;
    category: NewsCategory;
    isPublished: boolean;
    publishedAt: Date;
  }> = [
      {
        title: 'Conferencia Internacional de Ciencia de Datos 2026',
        content:
          'La Facultad de Ingeniería Estadística e Informática organizará la conferencia más importante del país sobre ciencia de datos y análisis estadístico. El evento contará con la participación de expertos internacionales y presentación de investigaciones de vanguardia.',
        excerpt:
          'La facultad organizará la conferencia más importante del país sobre ciencia de datos.',
        category: NewsCategory.EVENTS,
        isPublished: true,
        publishedAt: new Date(),
      },
      {
        title: 'Nuevos laboratorios de computación de última generación',
        content:
          'Se han inaugurado los nuevos laboratorios equipados con tecnología de punta para el desarrollo de proyectos de inteligencia artificial y machine learning. Los estudiantes tendrán acceso a workstations de alto rendimiento y servidores GPU.',
        excerpt:
          'Nuevos laboratorios equipados con tecnología de punta para IA y ML.',
        category: NewsCategory.ACADEMIC,
        isPublished: true,
        publishedAt: new Date(),
      },
      {
        title: 'Convocatoria para proyectos de investigación 2026',
        content:
          'Se abre la convocatoria para presentar proyectos de investigación en las áreas de estadística aplicada, inteligencia artificial, y sistemas de información. Los proyectos seleccionados recibirán financiamiento institucional.',
        excerpt:
          'Convocatoria abierta para proyectos de investigación con financiamiento.',
        category: NewsCategory.RESEARCH,
        isPublished: true,
        publishedAt: new Date(),
      },
    ];

  for (const newsItem of newsItems) {
    const newsEntity = newsRepository.create(newsItem);
    await newsRepository.save(newsEntity);
  }
  console.log('News created');

  console.log('Database seeding completed!');
}
