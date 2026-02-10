import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Post } from "./models/post.model";
import { CreatePostInput } from "./dto/create-post.input";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: "posts" })
  async getPosts(): Promise<Post[]> {
    return [];
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @Args("input") input: CreatePostInput,
    @CurrentUser() user: any,
  ): Promise<Post> {
    return null;
  }
}
