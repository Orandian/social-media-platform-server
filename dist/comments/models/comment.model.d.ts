import { User } from "../../users/models/user.model";
export declare class Comment {
    id: string;
    content: string;
    author: User;
    postId: string;
    createdAt: Date;
}
