import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.teachersRepository.create(
      createTeacherDto as DeepPartial<Teacher>,
    );
    return await this.teachersRepository.save(teacher);
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teachersRepository.find({
      where: { isActive: true },
      relations: ['career'],
      order: { lastName: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teachersRepository.findOne({
      where: { id },
      relations: ['career'],
    });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
    return teacher;
  }

  async findByCareer(careerId: string): Promise<Teacher[]> {
    return await this.teachersRepository.find({
      where: { career: { id: careerId }, isActive: true },
      relations: ['career'],
      order: { lastName: 'ASC' },
    });
  }

  async update(
    id: string,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    const teacher = await this.findOne(id);
    const updatedTeacher = Object.assign(teacher, updateTeacherDto) as Teacher;
    return await this.teachersRepository.save(updatedTeacher);
  }

  async remove(id: string): Promise<void> {
    const teacher = await this.findOne(id);
    await this.teachersRepository.remove(teacher);
  }
}
