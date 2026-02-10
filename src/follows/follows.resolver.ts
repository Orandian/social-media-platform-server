import { Resolver, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { FollowsService } from "./follows.service";
import { Follow } from "./models/follow.model";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => Follow)
export class FollowsResolver {
  constructor(private readonly followsService: FollowsService) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async follow(
    @Args("followingId", { type: () => ID }) followingId: string,
    @CurrentUser() user: any,
  ): Promise<boolean> {
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async unfollow(
    @Args("followingId", { type: () => ID }) followingId: string,
    @CurrentUser() user: any,
  ): Promise<boolean> {
    return true;
  }
}
