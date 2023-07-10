// src/product/product.controller.ts
import {
  Controller,
  Get,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResponse } from '../dtos/product.response.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async searchProduct(@Query('jan') jan: string): Promise<ProductResponse> {
    if (jan) {
      try {
        return await this.productService.findByJan(jan);
      } catch (err) {
        throw new NotFoundException(err);
      }
    }
  }
}
