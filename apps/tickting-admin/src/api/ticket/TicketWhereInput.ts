import { StringFilter } from "../../util/StringFilter";
import { TicketStatusWhereUniqueInput } from "../ticketStatus/TicketStatusWhereUniqueInput";

export type TicketWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  status?: TicketStatusWhereUniqueInput;
  title?: StringFilter;
};
