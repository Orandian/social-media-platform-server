import { FeedService } from "./feed.service";
import { Post } from "../posts/models/post.model";
export declare class FeedResolver {
    private readonly feedService;
    constructor(feedService: FeedService);
    feed(user: any): Promise<Post[]>;
}
