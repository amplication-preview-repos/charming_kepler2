import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type TicketStatusWhereInput = {
  id?: StringFilter;
  tickets?: TicketWhereUniqueInput;
  title?: StringFilter;
};
