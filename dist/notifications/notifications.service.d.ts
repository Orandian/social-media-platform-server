import { PrismaService } from "../prisma/prisma.service";
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    getRecent(userId: string): Promise<any[]>;
    markAsRead(id: string): Promise<any>;
}
