import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async getRecent(userId: string): Promise<any[]> {
    return [];
  }
  async markAsRead(id: string): Promise<any> {
    return null;
  }
}
