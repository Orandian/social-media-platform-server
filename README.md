# Social Media Platform Server

A GraphQL API server built with NestJS, Prisma, and PostgreSQL for a social media platform.

## Tech Stack

- **Framework**: NestJS 11
- **API**: GraphQL (Apollo Server 4)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with Passport
- **Language**: TypeScript 5
- **Testing**: Jest

## Project Structure

```
src/
├── auth/               # Authentication (JWT, login, tokens)
│   ├── dto/
│   ├── guards/
│   └── models/
├── comments/           # Comment CRUD operations
├── common/             # Shared utilities
│   ├── decorators/     # @CurrentUser decorator
│   ├── guards/         # GqlAuthGuard
│   └── scalars/        # Custom GraphQL scalars (Date)
├── feed/               # User feed aggregation
├── follows/            # Follow/unfollow functionality
├── graphql/            # GraphQL module configuration
├── health/             # Health check endpoints
├── likes/              # Like/unlike posts
├── media/              # Media upload handling
├── notifications/      # Push notifications
├── posts/              # Post CRUD operations
├── prisma/             # Prisma service
└── users/              # User management
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/social_media"
JWT_SECRET="your-jwt-secret"
```

### Running the Server

```bash
# Development (watch mode)
npm run start:dev

# Production build
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

The GraphQL Playground will be available at `http://localhost:3000/graphql`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start in watch mode |
| `npm run start:prod` | Start production server |
| `npm run build` | Build for production |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Run tests with coverage |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Lint and fix code |
| `npm run format` | Format code with Prettier |

## API Modules

- **Auth** - Login, token refresh, JWT authentication
- **Users** - User profiles, updates
- **Posts** - Create, read, update, delete posts
- **Comments** - Comment on posts
- **Likes** - Like/unlike posts
- **Follows** - Follow/unfollow users
- **Feed** - Personalized user feed
- **Notifications** - User notifications
- **Media** - File uploads
- **Health** - Server health checks

## Database Schema

The app uses Prisma with PostgreSQL. Key model:

```prisma
model User {
  id          String   @id @default(uuid())
  email       String   @unique
  username    String?  @unique
  displayName String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Run `npx prisma studio` to view/edit data in a GUI.
