import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthPayload } from "./models/auth-payload.model";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async login(@Args("input") input: LoginInput): Promise<AuthPayload> {
    return null; // Logic omitted
  }

  @Mutation(() => AuthPayload)
  async refreshToken(
    @Args("input") input: RefreshTokenInput,
  ): Promise<AuthPayload> {
    return null; // Logic omitted
  }
}
