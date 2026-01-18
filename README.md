# FINESI Web - Facultad de Ingeniería Estadística e Informática

Sistema web para la Facultad de Ingeniería Estadística e Informática (FINESI).

## 🚀 Tecnologías

| Componente           | Tecnología                                       |
| -------------------- | ------------------------------------------------ |
| **Frontend**         | Next.js 16 + React 19 + TypeScript + Tailwind 4  |
| **Backend**          | NestJS 11 + TypeORM + PostgreSQL                 |
| **Base de Datos**    | PostgreSQL 15                                    |
| **Documentación**    | Swagger/OpenAPI                                  |
| **Autenticación**    | JWT + Passport                                   |
| **Containerización** | Docker + Docker Compose                          |

## 📁 Estructura del Proyecto

```text
finesi_web/
├── frontend/              # Aplicación Next.js
│   ├── src/
│   │   ├── app/          # App Router (páginas)
│   │   └── components/   # Componentes reutilizables
│   └── public/           # Assets estáticos
├── backend/              # API NestJS
│   ├── src/
│   │   ├── auth/         # Módulo de autenticación
│   │   ├── users/        # Módulo de usuarios
│   │   ├── news/         # Módulo de noticias
│   │   ├── careers/      # Módulo de carreras
│   │   ├── teachers/     # Módulo de docentes
│   │   ├── health/       # Health checks
│   │   └── common/       # Utilidades compartidas
│   └── test/             # Tests E2E
├── docker-compose.yml    # Configuración de Docker
└── README.md
```

## ⚙️ Requisitos Previos

- Node.js 20+
- Docker y Docker Compose
- npm o yarn

## 🛠️ Configuración Inicial

### 1. Clonar el repositorio

```bash
git clone https://github.com/BeltranHC/finesi_web.git
cd finesi_web
```

### 2. Iniciar la Base de Datos

```bash
docker-compose up -d postgres pgadmin
```

Esto iniciará:

- PostgreSQL en el puerto 5433
- pgAdmin en el puerto 5050: <http://localhost:5050>

### 3. Configurar el Backend

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```

El backend estará disponible en: <http://localhost:3001>
Documentación API (Swagger): <http://localhost:3001/api/docs>

### 4. Configurar el Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

El frontend estará disponible en: <http://localhost:3000>

## 🔐 Credenciales por Defecto

### PostgreSQL

- **Host**: localhost
- **Puerto**: 5433
- **Usuario**: finesi_user
- **Contraseña**: finesi_password
- **Base de datos**: finesi_db

### pgAdmin

- **Email**: `admin@finesi.edu.pe`
- **Contraseña**: admin123

## 📚 API Endpoints

### Autenticación

- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Health Check

- `GET /api/health` - Estado del sistema
- `GET /api/health/ready` - Readiness check
- `GET /api/health/live` - Liveness check

### Recursos (CRUD completo)

- `/api/users` - Gestión de usuarios
- `/api/news` - Gestión de noticias
- `/api/careers` - Gestión de carreras
- `/api/teachers` - Gestión de docentes

## 📜 Scripts Disponibles

### Frontend

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación
- `npm run start` - Inicia la aplicación en producción

### Backend

- `npm run start:dev` - Inicia el servidor en modo desarrollo
- `npm run build` - Compila la aplicación
- `npm run start:prod` - Inicia en modo producción

## 📄 Licencia

Este proyecto es propiedad de la Facultad de Ingeniería Estadística e Informática.
