import { InputType, Field, ID } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  content: string;

  @Field(() => ID)
  @IsNotEmpty()
  postId: string;
}
