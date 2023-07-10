import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ProductResponse } from '../dtos/product.response.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async findByJan(Jan: string): Promise<ProductResponse | null> {
    return await this.productRepository.findProductByJan(Jan);
  }

  async countAll(): Promise<number> {
    return await this.productRepository.countAll();
  }

  async countByField(field: string): Promise<number> {
    return await this.productRepository.countByField(field);
  }
}
