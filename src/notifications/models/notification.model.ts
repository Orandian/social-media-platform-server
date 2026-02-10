import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Notification {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field()
  type: string;

  @Field(() => Boolean)
  read: boolean;

  @Field(() => Date)
  createdAt: Date;
}
