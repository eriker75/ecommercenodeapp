import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Order } from "./Order";
//import { Vendor } from "./Vendor";

@Entity()
export class Commission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  order: Order;

  //@ManyToOne(() => Vendor)
  //vendor: Vendor;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @Column("decimal", { precision: 5, scale: 2 })
  rate: number;

  @Column({ default: "pending" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
