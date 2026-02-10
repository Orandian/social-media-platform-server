import { PrismaService } from "../prisma/prisma.service";
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any, authorId: string): Promise<any>;
    findByPost(postId: string): Promise<any[]>;
}
