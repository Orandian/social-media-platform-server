import { Injectable } from "@nestjs/common";

@Injectable()
export class MediaService {
  async getPresignedUploadUrl(
    filename: string,
    fileType: string,
  ): Promise<string> {
    return "https://presigned-url.com";
  }
}
