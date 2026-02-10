import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, authorId: string): Promise<any> {
    return null;
  }
  async findByPost(postId: string): Promise<any[]> {
    return [];
  }
}
