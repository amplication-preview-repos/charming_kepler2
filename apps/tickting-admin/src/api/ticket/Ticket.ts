import { TicketStatus } from "../ticketStatus/TicketStatus";

export type Ticket = {
  content: string;
  createdAt: Date;
  id: string;
  status?: TicketStatus;
  title: string;
  updatedAt: Date;
};
