import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { Repository, EntityRepository } from 'typeorm';
import { ProductResponse } from '../dtos/product.response.dto';
import { plainToInstance } from 'class-transformer';

@EntityRepository(Product)
@Injectable()
export class ProductRepository extends Repository<Product> {
  async findProductByJan(jan: string): Promise<ProductResponse> {
    const result = await this.createQueryBuilder('product')
      .where(`product.jan = ${jan} `)
      .leftJoinAndSelect('product.attributes', 'attribute')
      .getOne();
    if (!result) {
      throw new NotFoundException('Product does not exits');
    }
    return await plainToInstance(ProductResponse, result);
  }

  async countAll(): Promise<number> {
    return this.count();
  }

  async countByField(field: string): Promise<number> {
    let counrResult: number = 0;
    if (field !== 'attributes') {
      counrResult = await this.createQueryBuilder('product')
        .where(`product.${field} IS NOT NULL AND product.${field} <> ''`)
        .getCount();
    } else {
      counrResult = await this.createQueryBuilder('product')
        .leftJoin('product.attributes', 'attribute')
        .where(
          `attribute.product_id IS NOT NULL AND attribute.product_id <> ''`,
        )
        .getCount();
    }

    return counrResult;
  }
}
