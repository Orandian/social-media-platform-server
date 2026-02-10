import { Resolver, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { LikesService } from "./likes.service";
import { Like } from "./models/like.model";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => Like)
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async toggleLike(
    @Args("postId", { type: () => ID }) postId: string,
    @CurrentUser() user: any,
  ): Promise<boolean> {
    return true;
  }
}
