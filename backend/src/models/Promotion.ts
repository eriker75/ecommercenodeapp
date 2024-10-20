import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 5, scale: 2 })
  discountAmount: number;

  @Column()
  discountType: "percentage" | "fixed";

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
