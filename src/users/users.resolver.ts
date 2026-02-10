import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { UpdateUserInput } from "./dto/update-user.input";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: "me" })
  @UseGuards(GqlAuthGuard)
  async getMe(@CurrentUser() user: any): Promise<User> {
    return null; // Logic omitted
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() user: any,
    @Args("input") input: UpdateUserInput,
  ): Promise<User> {
    return null; // Logic omitted
  }
}
