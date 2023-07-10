// src/product/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,BeforeInsert,BeforeUpdate } from 'typeorm';
import { Attribute } from './attribute.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  jan: string;

  @Column({nullable: true})
  product_name: string;

  @OneToMany(() => Attribute, attribute => attribute.product, { nullable: true,  cascade: true })
  attributes: Attribute[];

  @Column({nullable: true})
  maker: string;

  @Column({nullable: true})
  brand: string;

  @Column("simple-array",  { nullable: true })
  tags_from_description: string[];

  @Column("simple-array",  { nullable: true })
  tags_from_review: string[];

  // @BeforeInsert()
  // @BeforeUpdate()
  // async validate(): Promise<void> {
  //   await validateOrReject(this);
  // }
}
