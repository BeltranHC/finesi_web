import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';

describe('TeachersService', () => {
  let service: TeachersService;
  let repository: Repository<Teacher>;

  const mockTeacher: Teacher = {
    id: '123e4567-e89b-12d3-a456-426614174001',
    name: 'Dr. Juan Pérez',
    email: 'juan.perez@unap.edu.pe',
    position: 'Profesor Principal',
    bio: 'Experto en estadística',
    phone: '999888777',
    office: 'Oficina 101',
    imageUrl: null,
    specialties: ['Estadística', 'Machine Learning'],
    education: ['PhD en Estadística'],
    publications: ['Paper 1'],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    career: null,
  };

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeachersService,
        {
          provide: getRepositoryToken(Teacher),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TeachersService>(TeachersService);
    repository = module.get<Repository<Teacher>>(getRepositoryToken(Teacher));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new teacher', async () => {
      const createDto: CreateTeacherDto = {
        name: 'Dr. Juan Pérez',
        email: 'juan.perez@unap.edu.pe',
        position: 'Profesor Principal',
      };

      mockRepository.create.mockReturnValue(mockTeacher);
      mockRepository.save.mockResolvedValue(mockTeacher);

      const result = await service.create(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(mockTeacher);
    });
  });

  describe('findAll', () => {
    it('should return an array of active teachers', async () => {
      const teachers = [mockTeacher];
      mockRepository.find.mockResolvedValue(teachers);

      const result = await service.findAll();

      expect(mockRepository.find).toHaveBeenCalledWith({
        where: { isActive: true },
        relations: ['career'],
        order: { name: 'ASC' },
      });
      expect(result).toEqual(teachers);
    });
  });

  describe('findOne', () => {
    it('should return a teacher by id', async () => {
      mockRepository.findOne.mockResolvedValue(mockTeacher);

      const result = await service.findOne(mockTeacher.id);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockTeacher.id },
        relations: ['career'],
      });
      expect(result).toEqual(mockTeacher);
    });

    it('should throw NotFoundException if teacher not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne('non-existent-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a teacher', async () => {
      const updateDto = { name: 'Updated Name' };
      const updatedTeacher = { ...mockTeacher, ...updateDto };

      mockRepository.findOne.mockResolvedValue(mockTeacher);
      mockRepository.save.mockResolvedValue(updatedTeacher);

      const result = await service.update(mockTeacher.id, updateDto);

      expect(result.name).toBe('Updated Name');
    });
  });

  describe('remove', () => {
    it('should remove a teacher', async () => {
      mockRepository.findOne.mockResolvedValue(mockTeacher);
      mockRepository.remove.mockResolvedValue(mockTeacher);

      await service.remove(mockTeacher.id);

      expect(mockRepository.remove).toHaveBeenCalledWith(mockTeacher);
    });
  });
});
