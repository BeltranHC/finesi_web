import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@ApiTags('teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevo docente' })
  @ApiResponse({ status: 201, description: 'Docente creado exitosamente' })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los docentes activos' })
  @ApiQuery({ name: 'careerId', required: false, description: 'Filtrar por carrera' })
  @ApiResponse({ status: 200, description: 'Lista de docentes' })
  findAll(@Query('careerId') careerId?: string) {
    if (careerId) {
      return this.teachersService.findByCareer(careerId);
    }
    return this.teachersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener docente por ID' })
  @ApiResponse({ status: 200, description: 'Docente encontrado' })
  @ApiResponse({ status: 404, description: 'Docente no encontrado' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar docente' })
  @ApiResponse({ status: 200, description: 'Docente actualizado' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar docente' })
  @ApiResponse({ status: 200, description: 'Docente eliminado' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.teachersService.remove(id);
  }
}
