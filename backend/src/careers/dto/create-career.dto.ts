import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateCareerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  duration?: number;

  @IsString()
  @IsOptional()
  degree?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  skills?: string[];

  @IsString()
  @IsOptional()
  curriculum?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
