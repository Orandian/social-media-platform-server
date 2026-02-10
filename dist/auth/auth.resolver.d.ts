import { AuthService } from "./auth.service";
import { AuthPayload } from "./models/auth-payload.model";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(input: LoginInput): Promise<AuthPayload>;
    refreshToken(input: RefreshTokenInput): Promise<AuthPayload>;
}
