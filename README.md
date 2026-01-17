# FINESI Web - Facultad de Ingeniería Estadística e Informática

Este es un proyecto web para la Facultad de Ingeniería Estadística e Informática (FINESI).

## Tecnologías

- **Frontend**: Next.js 15 con TypeScript y Tailwind CSS
- **Backend**: NestJS con TypeORM
- **Base de Datos**: PostgreSQL 15

## Estructura del Proyecto

```
finesi_web/
├── frontend/          # Aplicación Next.js
├── backend/           # API NestJS
├── docker-compose.yml # Configuración de Docker
└── README.md
```

## Requisitos Previos

- Node.js 18+
- Docker y Docker Compose
- npm o yarn

## Configuración Inicial

### 1. Iniciar la Base de Datos

```bash
docker-compose up -d
```

Esto iniciará:
- PostgreSQL en el puerto 5433
- pgAdmin en el puerto 5050 (http://localhost:5050)

### 2. Configurar el Backend

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```

El backend estará disponible en http://localhost:3001

### 3. Configurar el Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en http://localhost:3000

## Credenciales por Defecto

### PostgreSQL
- **Usuario**: finesi_user
- **Contraseña**: finesi_password
- **Base de datos**: finesi_db

### pgAdmin
- **Email**: admin@finesi.edu.pe
- **Contraseña**: admin123

## Scripts Disponibles

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación
- `npm run start` - Inicia la aplicación en producción

### Backend
- `npm run start:dev` - Inicia el servidor en modo desarrollo
- `npm run build` - Compila la aplicación
- `npm run start:prod` - Inicia en modo producción

## Licencia

Este proyecto es propiedad de la Facultad de Ingeniería Estadística e Informática.
