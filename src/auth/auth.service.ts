import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // Signatures only
  async login(email: string, pass: string): Promise<any> {
    return null;
  }
  async register(data: any): Promise<any> {
    return null;
  }
  async refreshToken(token: string): Promise<any> {
    return null;
  }
}
