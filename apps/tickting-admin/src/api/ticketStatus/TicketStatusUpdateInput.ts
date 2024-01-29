import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type TicketStatusUpdateInput = {
  tickets?: TicketWhereUniqueInput | null;
  title?: string;
};
