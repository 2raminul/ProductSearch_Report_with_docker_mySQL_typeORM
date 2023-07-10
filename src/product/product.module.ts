import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductRepository } from './product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ReportController } from 'src/report/report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [ProductController, ReportController],
  providers: [ProductService],
})
export class ProductModule {}
