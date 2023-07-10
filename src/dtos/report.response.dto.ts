// src/product/product.entity.ts
import { Expose } from 'class-transformer';

export class ReportResponse {
  @Expose()
  product_name: number;

  @Expose()
  attributes: number;

  @Expose()
  maker: number;

  @Expose()
  brand: number;

  @Expose()
  tags_from_description: number;

  @Expose()
  tags_from_review: number;

  }
