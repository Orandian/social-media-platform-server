import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(280)
  content: string;
}
