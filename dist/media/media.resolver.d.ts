import { MediaService } from "./media.service";
export declare class MediaResolver {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    getPresignedUrl(filename: string, fileType: string): Promise<string>;
}
