import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { Coupon } from "./Coupon";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];

  @Column("decimal", { precision: 10, scale: 2 })
  total: number;

  @Column()
  status: string;

  @ManyToOne(() => Address)
  shippingAddress: Address;

  @ManyToOne(() => PaymentMethod)
  paymentMethod: PaymentMethod;

  @ManyToOne(() => Coupon, { nullable: true })
  coupon: Coupon;

  @Column({ nullable: true })
  trackingNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
