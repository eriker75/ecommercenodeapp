import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity("wishlists")
export class Wishlist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.wishlists)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
