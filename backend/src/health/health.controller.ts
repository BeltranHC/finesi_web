import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private configService: ConfigService) {}

  @Get()
  @ApiOperation({ summary: 'Verificar estado del sistema' })
  @ApiResponse({
    status: 200,
    description: 'Sistema funcionando correctamente',
  })
  check() {
    return {
      status: 'ok',
      environment: this.configService.get('NODE_ENV'),
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
    };
  }

  @Get('ready')
  @ApiOperation({ summary: 'Readiness probe para Kubernetes' })
  @ApiResponse({ status: 200, description: 'Servicio listo' })
  ready() {
    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('live')
  @ApiOperation({ summary: 'Liveness probe para Kubernetes' })
  @ApiResponse({ status: 200, description: 'Servicio activo' })
  live() {
    return {
      status: 'live',
      timestamp: new Date().toISOString(),
    };
  }
}
