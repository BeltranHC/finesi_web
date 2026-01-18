import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva noticia' })
  @ApiResponse({ status: 201, description: 'Noticia creada exitosamente' })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener noticias publicadas' })
  @ApiResponse({ status: 200, description: 'Lista de noticias publicadas' })
  findAll() {
    return this.newsService.findPublished();
  }

  @Get('all')
  @ApiOperation({ summary: 'Obtener todas las noticias (incluyendo borradores)' })
  @ApiResponse({ status: 200, description: 'Lista completa de noticias' })
  findAllIncludingDrafts() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener noticia por ID' })
  @ApiResponse({ status: 200, description: 'Noticia encontrada' })
  @ApiResponse({ status: 404, description: 'Noticia no encontrada' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.newsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar noticia' })
  @ApiResponse({ status: 200, description: 'Noticia actualizada' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar noticia' })
  @ApiResponse({ status: 200, description: 'Noticia eliminada' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.newsService.remove(id);
  }
}
