// src/attribute/attribute.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity'

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, product => product.attributes)
  product: Product;

  @Column({nullable: true})
  key: string;

  @Column("simple-array",  { nullable: true })
  values: string[];
}
