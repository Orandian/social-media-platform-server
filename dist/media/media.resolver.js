"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const media_service_1 = require("./media.service");
const gql_auth_guard_1 = require("../common/guards/gql-auth.guard");
let MediaResolver = class MediaResolver {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    async getPresignedUrl(filename, fileType) {
        return this.mediaService.getPresignedUploadUrl(filename, fileType);
    }
};
exports.MediaResolver = MediaResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)("filename")),
    __param(1, (0, graphql_1.Args)("fileType")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "getPresignedUrl", null);
exports.MediaResolver = MediaResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaResolver);
//# sourceMappingURL=media.resolver.js.map