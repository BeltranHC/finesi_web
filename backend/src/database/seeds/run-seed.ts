import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { seedDatabase } from './seed';

// Load environment variables from .env file
config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5433'),
  username: process.env.DATABASE_USER || 'finesi_user',
  password: process.env.DATABASE_PASSWORD || 'finesi_password',
  database: process.env.DATABASE_NAME || 'finesi_db',
  entities: ['src/**/*.entity.ts'],
  synchronize: true,
});

async function runSeeds() {
  try {
    await dataSource.initialize();
    console.log('Database connected');

    await seedDatabase(dataSource);

    await dataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error running seeds:', error);
    process.exit(1);
  }
}

void runSeeds();
