import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { UpdateUserInput } from "./dto/update-user.input";
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(user: any): Promise<User>;
    updateUser(user: any, input: UpdateUserInput): Promise<User>;
}
