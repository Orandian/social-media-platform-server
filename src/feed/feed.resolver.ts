import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { Post } from "../posts/models/post.model";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver()
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Query(() => [Post])
  @UseGuards(GqlAuthGuard)
  async feed(@CurrentUser() user: any): Promise<Post[]> {
    return [];
  }
}
