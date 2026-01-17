import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { NewsCategory } from '../entities/news.entity';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  excerpt?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsEnum(NewsCategory)
  @IsOptional()
  category?: NewsCategory;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
