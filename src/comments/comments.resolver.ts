import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { Comment } from "./models/comment.model";
import { CreateCommentInput } from "./dto/create-comment.input";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async createComment(
    @Args("input") input: CreateCommentInput,
    @CurrentUser() user: any,
  ): Promise<Comment> {
    return null;
  }
}
