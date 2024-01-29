import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketStatusService } from "./ticketStatus.service";
import { TicketStatusControllerBase } from "./base/ticketStatus.controller.base";

@swagger.ApiTags("ticketStatuses")
@common.Controller("ticketStatuses")
export class TicketStatusController extends TicketStatusControllerBase {
  constructor(
    protected readonly service: TicketStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
