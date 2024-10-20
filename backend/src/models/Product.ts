import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Brand } from "./Brand";
import { Inventory } from "./Inventory";
import { ProductImage } from "./ProductImage";
import { Reviews } from "./Reviews";
import { Coupon } from "./Coupon";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventory: Inventory[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];

  @OneToMany(() => Reviews, (review) => review.product)
  reviews: Reviews[];

  @ManyToMany(() => Coupon, (coupon) => coupon.applicableProducts)
  coupons: Coupon[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: "simple-array", nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
