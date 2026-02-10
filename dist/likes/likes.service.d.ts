import { PrismaService } from "../prisma/prisma.service";
export declare class LikesService {
    private prisma;
    constructor(prisma: PrismaService);
    toggleLike(postId: string, userId: string): Promise<any>;
    getLikeCount(postId: string): Promise<number>;
}
