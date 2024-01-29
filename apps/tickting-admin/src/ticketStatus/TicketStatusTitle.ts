import { TicketStatus as TTicketStatus } from "../api/ticketStatus/TicketStatus";

export const TICKETSTATUS_TITLE_FIELD = "title";

export const TicketStatusTitle = (record: TTicketStatus): string => {
  return record.title?.toString() || String(record.id);
};
