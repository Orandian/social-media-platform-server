import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

  async follow(followerId: string, followingId: string): Promise<any> {
    return null;
  }
  async unfollow(followerId: string, followingId: string): Promise<any> {
    return null;
  }
}
