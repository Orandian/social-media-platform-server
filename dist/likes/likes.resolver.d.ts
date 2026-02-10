import { LikesService } from "./likes.service";
export declare class LikesResolver {
    private readonly likesService;
    constructor(likesService: LikesService);
    toggleLike(postId: string, user: any): Promise<boolean>;
}
