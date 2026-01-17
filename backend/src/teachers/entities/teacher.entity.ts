import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Career } from '../../careers/entities/career.entity';

export enum TeacherCategory {
  PRINCIPAL = 'principal',
  ASSOCIATE = 'associate',
  AUXILIARY = 'auxiliary',
  CONTRACTOR = 'contractor',
}

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({
    type: 'enum',
    enum: TeacherCategory,
    default: TeacherCategory.CONTRACTOR,
  })
  category: TeacherCategory;

  @Column({ nullable: true })
  degree: string;

  @Column({ nullable: true })
  specialization: string;

  @Column('text', { nullable: true })
  biography: string;

  @Column('simple-array', { nullable: true })
  courses: string[];

  @Column({ nullable: true })
  officeHours: string;

  @ManyToOne(() => Career, { nullable: true })
  career: Career;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
