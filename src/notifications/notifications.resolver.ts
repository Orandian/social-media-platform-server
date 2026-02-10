import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { Notification } from "./models/notification.model";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => Notification)
export class NotificationsResolver {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Query(() => [Notification])
  @UseGuards(GqlAuthGuard)
  async notifications(@CurrentUser() user: any): Promise<Notification[]> {
    return [];
  }

  @Mutation(() => Notification)
  @UseGuards(GqlAuthGuard)
  async markAsRead(
    @Args("id", { type: () => ID }) id: string,
  ): Promise<Notification> {
    return null;
  }
}
