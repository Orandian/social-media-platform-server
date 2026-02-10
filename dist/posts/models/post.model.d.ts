import { User } from "../../users/models/user.model";
export declare class Post {
    id: string;
    content: string;
    author: User;
    createdAt: Date;
    updatedAt: Date;
}
