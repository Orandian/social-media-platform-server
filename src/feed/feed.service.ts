import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async getPersonalizedFeed(userId: string): Promise<any[]> {
    return [];
  }
}
