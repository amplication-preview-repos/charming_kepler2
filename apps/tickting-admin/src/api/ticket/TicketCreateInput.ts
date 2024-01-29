import { TicketStatusWhereUniqueInput } from "../ticketStatus/TicketStatusWhereUniqueInput";

export type TicketCreateInput = {
  content: string;
  status: TicketStatusWhereUniqueInput;
  title: string;
};
