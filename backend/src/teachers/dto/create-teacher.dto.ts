import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { TeacherCategory } from '../entities/teacher.entity';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsEnum(TeacherCategory)
  @IsOptional()
  category?: TeacherCategory;

  @IsString()
  @IsOptional()
  degree?: string;

  @IsString()
  @IsOptional()
  specialization?: string;

  @IsString()
  @IsOptional()
  biography?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  courses?: string[];

  @IsString()
  @IsOptional()
  officeHours?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
