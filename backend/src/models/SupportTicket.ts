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
import { SupportTicketReply } from "./SupportTicketReply";

@Entity()
export class SupportTicket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.supportTickets)
  user: User;

  @Column()
  subject: string;

  @Column("text")
  description: string;

  @Column({ default: "open" })
  status: string;

  @Column({ nullable: true })
  priority: string;

  @ManyToOne(() => User, { nullable: true })
  assignedTo: User;

  @OneToMany(() => SupportTicketReply, (reply) => reply.ticket)
  replies: SupportTicketReply[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
