import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Career } from './entities/career.entity';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Injectable()
export class CareersService {
  constructor(
    @InjectRepository(Career)
    private careersRepository: Repository<Career>,
  ) {}

  async create(createCareerDto: CreateCareerDto): Promise<Career> {
    const career = this.careersRepository.create(createCareerDto);
    return await this.careersRepository.save(career);
  }

  async findAll(): Promise<Career[]> {
    return await this.careersRepository.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Career> {
    const career = await this.careersRepository.findOne({ where: { id } });
    if (!career) {
      throw new NotFoundException(`Career with ID ${id} not found`);
    }
    return career;
  }

  async findBySlug(slug: string): Promise<Career> {
    const career = await this.careersRepository.findOne({ where: { slug } });
    if (!career) {
      throw new NotFoundException(`Career with slug ${slug} not found`);
    }
    return career;
  }

  async update(id: string, updateCareerDto: UpdateCareerDto): Promise<Career> {
    const career = await this.findOne(id);
    Object.assign(career, updateCareerDto);
    return await this.careersRepository.save(career);
  }

  async remove(id: string): Promise<void> {
    const career = await this.findOne(id);
    await this.careersRepository.remove(career);
  }
}
