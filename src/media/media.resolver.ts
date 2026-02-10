import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { MediaService } from "./media.service";
import { GqlAuthGuard } from "../common/guards/gql-auth.guard";

@Resolver()
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async getPresignedUrl(
    @Args("filename") filename: string,
    @Args("fileType") fileType: string,
  ): Promise<string> {
    return this.mediaService.getPresignedUploadUrl(filename, fileType);
  }
}
