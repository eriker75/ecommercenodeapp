import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column("decimal", { precision: 5, scale: 2 })
  discount: number;

  @Column()
  type: "percentage" | "fixed";

  @Column({ nullable: true })
  maxUses: number;

  @Column({ nullable: true })
  usesCount: number;

  @Column({ nullable: true })
  expiryDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Product)
  @JoinTable()
  applicableProducts: Product[];

  @OneToMany(() => Order, (order) => order.coupon)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
