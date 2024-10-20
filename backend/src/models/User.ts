import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./Address";
import { Order } from "./Order";
import { PaymentMethod } from "./PaymentMethod";
import { Role } from "./Role";
import { Cart } from "./Cart";
import { Comment } from "./Comment";
import { InboundMessage } from "./InboundMessage";
import { Media } from "./Media";
import { Message } from "./Message";
import { Notification } from "./Notification";
import { Post } from "./Post";
import { SupportTicket } from "./SupportTicket";
import { Wishlist } from "./Wishlist";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ default: false })
  is_verified: boolean;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  paymentMethods: PaymentMethod[];

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => InboundMessage, (inboundMessage) => inboundMessage.sender)
  inboundMessages: InboundMessage[];

  @OneToMany(() => Media, (media) => media.user)
  media: Media[];

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @OneToMany(() => SupportTicket, (ticket) => ticket.user)
  supportTickets: SupportTicket[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
  wishlists: Wishlist[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
