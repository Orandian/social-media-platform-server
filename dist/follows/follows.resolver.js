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
exports.FollowsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const follows_service_1 = require("./follows.service");
const follow_model_1 = require("./models/follow.model");
const gql_auth_guard_1 = require("../common/guards/gql-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
let FollowsResolver = class FollowsResolver {
    constructor(followsService) {
        this.followsService = followsService;
    }
    async follow(followingId, user) {
        return true;
    }
    async unfollow(followingId, user) {
        return true;
    }
};
exports.FollowsResolver = FollowsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)("followingId", { type: () => graphql_1.ID })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FollowsResolver.prototype, "follow", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)("followingId", { type: () => graphql_1.ID })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FollowsResolver.prototype, "unfollow", null);
exports.FollowsResolver = FollowsResolver = __decorate([
    (0, graphql_1.Resolver)(() => follow_model_1.Follow),
    __metadata("design:paramtypes", [follows_service_1.FollowsService])
], FollowsResolver);
//# sourceMappingURL=follows.resolver.js.map