import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum NewsCategory {
  EVENTS = 'events',
  ACADEMIC = 'academic',
  RESEARCH = 'research',
  ANNOUNCEMENTS = 'announcements',
}

@Entity('news')
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  excerpt: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({
    type: 'enum',
    enum: NewsCategory,
    default: NewsCategory.ANNOUNCEMENTS,
  })
  category: NewsCategory;

  @Column({ default: true })
  isPublished: boolean;

  @Column({ nullable: true })
  publishedAt: Date;

  @ManyToOne(() => User, { nullable: true })
  author: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
