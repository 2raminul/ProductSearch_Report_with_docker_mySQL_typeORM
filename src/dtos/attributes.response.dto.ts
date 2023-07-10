// src/attribute/attribute.entity.ts
import { ProductResponse } from './product.response.dto'
import { Expose } from 'class-transformer';

export class AttributeResponse { 
  @Expose()
  product: ProductResponse;
  @Expose()
  key: string;

  @Expose()
  values: string[];
}
