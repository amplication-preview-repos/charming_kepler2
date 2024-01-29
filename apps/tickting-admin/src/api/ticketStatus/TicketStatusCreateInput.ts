import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type TicketStatusCreateInput = {
  tickets?: TicketWhereUniqueInput | null;
  title: string;
};
