import { PrismaService } from "../prisma/prisma.service";
export declare class FollowsService {
    private prisma;
    constructor(prisma: PrismaService);
    follow(followerId: string, followingId: string): Promise<any>;
    unfollow(followerId: string, followingId: string): Promise<any>;
}
