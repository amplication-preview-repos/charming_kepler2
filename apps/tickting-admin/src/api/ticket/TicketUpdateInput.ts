import { TicketStatusWhereUniqueInput } from "../ticketStatus/TicketStatusWhereUniqueInput";

export type TicketUpdateInput = {
  content?: string;
  status?: TicketStatusWhereUniqueInput;
  title?: string;
};
