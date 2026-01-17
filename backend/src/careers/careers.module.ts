import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { Career } from './entities/career.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Career])],
  controllers: [CareersController],
  providers: [CareersService],
  exports: [CareersService],
})
export class CareersModule {}
