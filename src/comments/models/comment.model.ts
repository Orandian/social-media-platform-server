import { ObjectType, Field, ID } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => User)
  author: User;

  @Field(() => ID)
  postId: string;

  @Field(() => Date)
  createdAt: Date;
}
