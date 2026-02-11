# GraphQL API Documentation

This document describes the GraphQL API endpoints for the Social Media Platform server.

## Authentication Module

### Mutations

#### login

Authenticate a user and return tokens.

- **Input**: `LoginInput`
  - `email` (String!): User's email address.
  - `password` (String!): User's password (min 8 characters).
- **Returns**: `AuthPayload`
  - `accessToken` (String)
  - `refreshToken` (String)

#### refreshToken

Refresh the access token using a refresh token.

- **Input**: `RefreshTokenInput`
  - `refreshToken` (String!)
- **Returns**: `AuthPayload`

---

## Users Module

### Queries

#### me

Get the current authenticated user's profile.

- **Authentication**: `Required` (GqlAuthGuard)
- **Returns**: `User`
  - `id` (ID!)
  - `email` (String!)
  - `username` (String)
  - `displayName` (String)
  - `createdAt` (Date!)
  - `updatedAt` (Date!)

### Mutations

#### updateUser

Update the current user's profile information.

- **Authentication**: `Required` (GqlAuthGuard)
- **Input**: `UpdateUserInput`
- **Returns**: `User`

---

## Posts Module

### Queries

#### posts

Get a list of all posts.

- **Returns**: `[Post!]`
  - `id` (ID!)
  - `content` (String!)
  - `author` (User!)
  - `createdAt` (Date!)
  - `updatedAt` (Date!)

### Mutations

#### createPost

Create a new post.

- **Authentication**: `Required` (GqlAuthGuard)
- **Input**: `CreatePostInput`
- **Returns**: `Post`

---

## Feed Module

### Queries

#### feed

Get the personalized feed for the authenticated user.

- **Authentication**: `Required` (GqlAuthGuard)
- **Returns**: `[Post!]`

---

## Comments Module

### Mutations

#### createComment

Add a comment to a post.

- **Authentication**: `Required` (GqlAuthGuard)
- **Input**: `CreateCommentInput`
- **Returns**: `Comment`
  - `id` (ID!)
  - `content` (String!)
  - `author` (User!)
  - `postId` (ID!)
  - `createdAt` (Date!)

---

## Likes Module

### Mutations

#### toggleLike

Toggle a like on a post.

- **Authentication**: `Required` (GqlAuthGuard)
- **Arguments**:
  - `postId` (ID!)
- **Returns**: `Boolean` (True if liked, false if unliked)

---

## Follows Module

### Mutations

#### follow

Follow a user.

- **Authentication**: `Required` (GqlAuthGuard)
- **Arguments**:
  - `followingId` (ID!)
- **Returns**: `Boolean`

#### unfollow

Unfollow a user.

- **Authentication**: `Required` (GqlAuthGuard)
- **Arguments**:
  - `followingId` (ID!)
- **Returns**: `Boolean`

---

## Notifications Module

### Queries

#### notifications

Get all notifications for the authenticated user.

- **Authentication**: `Required` (GqlAuthGuard)
- **Returns**: `[Notification!]`
  - `id` (ID!)
  - `content` (String!)
  - `type` (String!)
  - `read` (Boolean!)
  - `createdAt` (Date!)

### Mutations

#### markAsRead

Mark a notification as read.

- **Authentication**: `Required` (GqlAuthGuard)
- **Arguments**:
  - `id` (ID!)
- **Returns**: `Notification`

---

## Media Module

### Mutations

#### getPresignedUrl

Get a S3 presigned URL for uploading media files.

- **Authentication**: `Required` (GqlAuthGuard)
- **Arguments**:
  - `filename` (String!)
  - `fileType` (String!)
- **Returns**: `String` (The presigned upload URL)

---

## Health Module

### Queries

#### healthCheck

Check if the server is healthy.

- **Returns**: `HealthStatus`
  - `status` (String!)
  - `timestamp` (String!)
