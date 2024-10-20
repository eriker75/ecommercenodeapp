import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { SupportTicket } from "./SupportTicket";
import { User } from "./User";

@Entity()
export class SupportTicketReply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SupportTicket, (ticket) => ticket.replies)
  ticket: SupportTicket;

  @ManyToOne(() => User)
  user: User;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
