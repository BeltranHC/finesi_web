import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { CareersService } from './careers.service';
import { Career } from './entities/career.entity';
import { CreateCareerDto } from './dto/create-career.dto';

describe('CareersService', () => {
  let service: CareersService;

  const mockCareer: Career = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Ingeniería de Sistemas',
    slug: 'sistemas',
    description: 'Carrera de sistemas',
    duration: 10,
    degree: 'Ingeniero de Sistemas',
    curriculum: 'Plan de estudios',
    skills: ['Programación', 'Base de datos'],
    isActive: true,
    imageUrl: '',
    createdAt: new Date(),
    updatedAt: new Date(),
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
        CareersService,
        {
          provide: getRepositoryToken(Career),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CareersService>(CareersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new career', async () => {
      const createDto: CreateCareerDto = {
        name: 'Ingeniería de Sistemas',
        slug: 'sistemas',
        description: 'Carrera de sistemas',
        duration: 10,
      };

      mockRepository.create.mockReturnValue(mockCareer);
      mockRepository.save.mockResolvedValue(mockCareer);

      const result = await service.create(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(mockCareer);
    });
  });

  describe('findAll', () => {
    it('should return an array of active careers', async () => {
      const careers = [mockCareer];
      mockRepository.find.mockResolvedValue(careers);

      const result = await service.findAll();

      expect(mockRepository.find).toHaveBeenCalledWith({
        where: { isActive: true },
        order: { name: 'ASC' },
      });
      expect(result).toEqual(careers);
    });
  });

  describe('findOne', () => {
    it('should return a career by id', async () => {
      mockRepository.findOne.mockResolvedValue(mockCareer);

      const result = await service.findOne(mockCareer.id);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockCareer.id },
      });
      expect(result).toEqual(mockCareer);
    });

    it('should throw NotFoundException if career not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne('non-existent-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findBySlug', () => {
    it('should return a career by slug', async () => {
      mockRepository.findOne.mockResolvedValue(mockCareer);

      const result = await service.findBySlug('sistemas');

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { slug: 'sistemas' },
      });
      expect(result).toEqual(mockCareer);
    });

    it('should throw NotFoundException if career not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.findBySlug('non-existent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a career', async () => {
      const updateDto = { name: 'Updated Career' };
      const updatedCareer = { ...mockCareer, ...updateDto };

      mockRepository.findOne.mockResolvedValue(mockCareer);
      mockRepository.save.mockResolvedValue(updatedCareer);

      const result = await service.update(mockCareer.id, updateDto);

      expect(result.name).toBe('Updated Career');
    });
  });

  describe('remove', () => {
    it('should remove a career', async () => {
      mockRepository.findOne.mockResolvedValue(mockCareer);
      mockRepository.remove.mockResolvedValue(mockCareer);

      await service.remove(mockCareer.id);

      expect(mockRepository.remove).toHaveBeenCalledWith(mockCareer);
    });
  });
});
