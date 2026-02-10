import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<any> {
    return null;
  }
  async update(id: string, data: any): Promise<any> {
    return null;
  }
  async remove(id: string): Promise<any> {
    return null;
  }
}
