import { PrismaService } from "../prisma/prisma.service";
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any, authorId: string): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
