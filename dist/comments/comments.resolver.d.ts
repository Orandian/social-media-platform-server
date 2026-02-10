import { CommentsService } from "./comments.service";
import { Comment } from "./models/comment.model";
import { CreateCommentInput } from "./dto/create-comment.input";
export declare class CommentsResolver {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(input: CreateCommentInput, user: any): Promise<Comment>;
}
