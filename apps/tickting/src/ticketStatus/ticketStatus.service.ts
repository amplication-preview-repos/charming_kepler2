import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketStatusServiceBase } from "./base/ticketStatus.service.base";

@Injectable()
export class TicketStatusService extends TicketStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
