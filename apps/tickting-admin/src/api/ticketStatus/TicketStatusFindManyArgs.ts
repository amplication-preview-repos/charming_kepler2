import { TicketStatusWhereInput } from "./TicketStatusWhereInput";
import { TicketStatusOrderByInput } from "./TicketStatusOrderByInput";

export type TicketStatusFindManyArgs = {
  where?: TicketStatusWhereInput;
  orderBy?: Array<TicketStatusOrderByInput>;
  skip?: number;
  take?: number;
};
