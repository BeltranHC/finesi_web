import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';

describe('NewsService', () => {
  let service: NewsService;
  let repository: Repository<News>;

  const mockNews: News = {
    id: '123e4567-e89b-12d3-a456-426614174002',
    title: 'Nueva noticia importante',
    slug: 'nueva-noticia-importante',
    content: 'Contenido de la noticia',
    excerpt: 'Resumen de la noticia',
    imageUrl: null,
    author: 'Admin',
    category: 'Académico',
    tags: ['importante', 'evento'],
    publishedAt: new Date(),
    isPublished: true,
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
        NewsService,
        {
          provide: getRepositoryToken(News),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<NewsService>(NewsService);
    repository = module.get<Repository<News>>(getRepositoryToken(News));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a news article', async () => {
      const createDto: CreateNewsDto = {
        title: 'Nueva noticia importante',
        content: 'Contenido de la noticia',
      };

      mockRepository.create.mockReturnValue(mockNews);
      mockRepository.save.mockResolvedValue(mockNews);

      const result = await service.create(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(mockNews);
    });
  });

  describe('findAll', () => {
    it('should return an array of published news', async () => {
      const news = [mockNews];
      mockRepository.find.mockResolvedValue(news);

      const result = await service.findAll();

      expect(mockRepository.find).toHaveBeenCalledWith({
        where: { isPublished: true },
        order: { publishedAt: 'DESC' },
      });
      expect(result).toEqual(news);
    });
  });

  describe('findOne', () => {
    it('should return a news article by id', async () => {
      mockRepository.findOne.mockResolvedValue(mockNews);

      const result = await service.findOne(mockNews.id);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockNews.id },
      });
      expect(result).toEqual(mockNews);
    });

    it('should throw NotFoundException if news not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne('non-existent-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a news article', async () => {
      const updateDto = { title: 'Updated Title' };
      const updatedNews = { ...mockNews, ...updateDto };

      mockRepository.findOne.mockResolvedValue(mockNews);
      mockRepository.save.mockResolvedValue(updatedNews);

      const result = await service.update(mockNews.id, updateDto);

      expect(result.title).toBe('Updated Title');
    });
  });

  describe('remove', () => {
    it('should remove a news article', async () => {
      mockRepository.findOne.mockResolvedValue(mockNews);
      mockRepository.remove.mockResolvedValue(mockNews);

      await service.remove(mockNews.id);

      expect(mockRepository.remove).toHaveBeenCalledWith(mockNews);
    });
  });
});
