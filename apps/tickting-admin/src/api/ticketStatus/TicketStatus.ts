import { Ticket } from "../ticket/Ticket";

export type TicketStatus = {
  createdAt: Date;
  id: string;
  tickets?: Ticket | null;
  title: string;
  updatedAt: Date;
};
