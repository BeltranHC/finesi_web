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
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@ApiTags('careers')
@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva carrera' })
  @ApiResponse({ status: 201, description: 'Carrera creada exitosamente' })
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las carreras activas' })
  @ApiResponse({ status: 200, description: 'Lista de carreras' })
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener carrera por ID' })
  @ApiResponse({ status: 200, description: 'Carrera encontrada' })
  @ApiResponse({ status: 404, description: 'Carrera no encontrada' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.careersService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Obtener carrera por slug' })
  @ApiResponse({ status: 200, description: 'Carrera encontrada' })
  @ApiResponse({ status: 404, description: 'Carrera no encontrada' })
  findBySlug(@Param('slug') slug: string) {
    return this.careersService.findBySlug(slug);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar carrera' })
  @ApiResponse({ status: 200, description: 'Carrera actualizada' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCareerDto: UpdateCareerDto,
  ) {
    return this.careersService.update(id, updateCareerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar carrera' })
  @ApiResponse({ status: 200, description: 'Carrera eliminada' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.careersService.remove(id);
  }
}
