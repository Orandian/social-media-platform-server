import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async toggleLike(postId: string, userId: string): Promise<any> {
    return null;
  }
  async getLikeCount(postId: string): Promise<number> {
    return 0;
  }
}
