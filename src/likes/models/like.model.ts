import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  userId: string;

  @Field(() => ID)
  postId: string;

  @Field(() => Date)
  createdAt: Date;
}
