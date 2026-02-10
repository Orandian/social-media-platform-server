import { PostsService } from "./posts.service";
import { Post } from "./models/post.model";
import { CreatePostInput } from "./dto/create-post.input";
export declare class PostsResolver {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<Post[]>;
    createPost(input: CreatePostInput, user: any): Promise<Post>;
}
