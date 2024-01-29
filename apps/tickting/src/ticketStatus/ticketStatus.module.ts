import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketStatusModuleBase } from "./base/ticketStatus.module.base";
import { TicketStatusService } from "./ticketStatus.service";
import { TicketStatusController } from "./ticketStatus.controller";
import { TicketStatusResolver } from "./ticketStatus.resolver";

@Module({
  imports: [TicketStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketStatusController],
  providers: [TicketStatusService, TicketStatusResolver],
  exports: [TicketStatusService],
})
export class TicketStatusModule {}
