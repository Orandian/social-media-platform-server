import { FollowsService } from "./follows.service";
export declare class FollowsResolver {
    private readonly followsService;
    constructor(followsService: FollowsService);
    follow(followingId: string, user: any): Promise<boolean>;
    unfollow(followingId: string, user: any): Promise<boolean>;
}
