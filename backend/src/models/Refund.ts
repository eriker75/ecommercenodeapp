import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Order } from "./Order";
import { User } from "./User";

@Entity()
export class Refund {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  processedBy: User;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @Column()
  reason: string;

  @Column({ default: "pending" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
