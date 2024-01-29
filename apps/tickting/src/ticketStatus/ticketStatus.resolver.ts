import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TicketStatusResolverBase } from "./base/ticketStatus.resolver.base";
import { TicketStatus } from "./base/TicketStatus";
import { TicketStatusService } from "./ticketStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TicketStatus)
export class TicketStatusResolver extends TicketStatusResolverBase {
  constructor(
    protected readonly service: TicketStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
