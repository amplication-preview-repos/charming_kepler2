import { SortOrder } from "../../util/SortOrder";

export type TicketStatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ticketsId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
