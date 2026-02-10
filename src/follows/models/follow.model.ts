import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Follow {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  followerId: string;

  @Field(() => ID)
  followingId: string;

  @Field(() => Date)
  createdAt: Date;
}
