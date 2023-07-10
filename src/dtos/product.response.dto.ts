// src/product/product.entity.ts
import { AttributeResponse } from './attributes.response.dto';
import { Expose } from 'class-transformer';

export class ProductResponse {
  @Expose()
  jan: string;

  @Expose()
  product_name: string;

  @Expose()
  attributes: AttributeResponse[];

  @Expose()
  maker: string;

  @Expose()
  brand: string;

  @Expose()
  tags_from_description: string[];

  @Expose()
  tags_from_review: string[];
  }
