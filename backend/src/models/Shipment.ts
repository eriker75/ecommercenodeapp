import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Order } from "./Order";

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  order: Order;

  @Column()
  trackingNumber: string;

  @Column()
  carrier: string;

  @Column({ type: "simple-json", nullable: true })
  trackingDetails: { status: string; location: string; timestamp: Date }[];

  @Column()
  estimatedDeliveryDate: Date;

  @Column({ default: "pending" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
