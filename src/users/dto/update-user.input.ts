import { InputType, Field } from "@nestjs/graphql";
import { IsOptional, MinLength } from "class-validator";

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  displayName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(3)
  username?: string;
}
