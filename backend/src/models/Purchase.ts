import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Provider } from "./Provider";
//import { PurchaseItem } from "./PurchaseItem";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Provider)
  provider: Provider;

  //@OneToMany(() => PurchaseItem, (purchaseItem) => purchaseItem.purchase)
  //items: PurchaseItem[];

  @Column("decimal", { precision: 10, scale: 2 })
  totalAmount: number;

  @Column()
  purchaseDate: Date;

  @Column({ nullable: true })
  invoiceNumber: string;

  @Column({ default: "pending" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
