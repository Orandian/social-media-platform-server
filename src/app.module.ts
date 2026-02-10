import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { GraphqlModule } from "./graphql/graphql.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";
import { CommentsModule } from "./comments/comments.module";
import { LikesModule } from "./likes/likes.module";
import { FollowsModule } from "./follows/follows.module";
import { FeedModule } from "./feed/feed.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { MediaModule } from "./media/media.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [
    PrismaModule,
    GraphqlModule,
    AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    FollowsModule,
    FeedModule,
    NotificationsModule,
    MediaModule,
    HealthModule,
  ],
})
export class AppModule {}
