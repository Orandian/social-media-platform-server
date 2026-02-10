import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, authorId: string): Promise<any> {
    return null;
  }
  async findAll(): Promise<any[]> {
    return [];
  }
  async findOne(id: string): Promise<any> {
    return null;
  }
}
