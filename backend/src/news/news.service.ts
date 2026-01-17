import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const news = this.newsRepository.create(createNewsDto);
    if (createNewsDto.isPublished) {
      news.publishedAt = new Date();
    }
    return await this.newsRepository.save(news);
  }

  async findAll(): Promise<News[]> {
    return await this.newsRepository.find({
      order: { createdAt: 'DESC' },
      relations: ['author'],
    });
  }

  async findPublished(): Promise<News[]> {
    return await this.newsRepository.find({
      where: { isPublished: true },
      order: { publishedAt: 'DESC' },
      relations: ['author'],
    });
  }

  async findOne(id: string): Promise<News> {
    const news = await this.newsRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return news;
  }

  async update(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    const news = await this.findOne(id);
    if (updateNewsDto.isPublished && !news.publishedAt) {
      news.publishedAt = new Date();
    }
    const updatedNews = Object.assign(news, updateNewsDto) as News;
    return await this.newsRepository.save(updatedNews);
  }

  async remove(id: string): Promise<void> {
    const news = await this.findOne(id);
    await this.newsRepository.remove(news);
  }
}
