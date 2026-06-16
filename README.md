# Backend — Tailor Management System

The backend is a GraphQL API built with Express and TypeScript, backed by PostgreSQL via Prisma ORM. It handles all business logic for client management, invoicing, expense/income tracking, and analytics.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Node.js + TypeScript | Runtime and type safety |
| Express | HTTP server |
| GraphQL | API query language |
| Prisma | ORM and database migrations |
| PostgreSQL | Relational database |

---

## Project Structure

```
tailoring-api/
├── prisma/
│   ├── schema.prisma                       # Database schema
│   └── migrations/                         # Prisma migration history
├── src/
│   ├── app.ts                                # Entry point — Express + GraphQL server setup
│   ├── graphql/                              # GraphQL type definitions and resolvers
│   │   ├── resolvers/                        # GraphQL resolvers
│   │   │    ├── ordersResolvers.ts           # Orders queries and mutations
│   │   │    ├── expenseResolvers.ts          # Expense queries and mutations
│   │   │    ├── incomeResolvers.ts           # Income queries and mutations
│   │   │    ├── financialRecordResolvers.ts  # Financial records queries and mutations
│   │   │    ├── measurementsResolvers.ts     # Client measurements queries and mutations
│   │   │    ├── clientResolvers.ts           # client queries and mutations
│   │   │    ├── eventsResolvers.ts           # Events queries and mutations
│   │   │    ├── authResolvers.ts             # Authentication queries and mutations
│   │   └── schema.ts                         # GraphQL type definitions
│   ├── middleware/
│   │   ├── authMiddleware.ts                 # Authentication middleware
│   │   ├── synchronizeFinancialRecords.ts    # Financial Records synchronizer middleware
│   ├── prisma/
│   │   ├── prismaClient.ts                   # prisma client
│   ├── seed/
│   │   ├── seed.ts                           # db seed file
│   ├── services/
│   │   ├── emailService.ts                   # email service
│   └──utils/
│   │   ├── aggregateRecords.ts               # Aggregates financial records
│   │   └── authUtils.ts                      # authentication utilities (for JWT)
├── app.ts                                    # EEntry file
├── .env.local                                # Environment variable from vercel
├── package.json
└── tsconfig.json
```

---

## Prerequisites

- Node.js v18+
- PostgreSQL instance (local or hosted)
- npm or yarn

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
PORT=4000
NODE_ENV=development
```

### 3. Run database migrations

```bash
npx prisma migrate dev
```

This applies all pending migrations and generates the Prisma client.

### 4. (Optional) Seed the database

```bash
npx prisma db seed
```

### 5. Start the development server

```bash
npm run dev
```

The GraphQL API will be available at `http://localhost:4000/graphql`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled production build |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma migrate dev` | Apply migrations and regenerate client |
| `npx prisma generate` | Regenerate Prisma client without migrating |

---

## GraphQL API Overview

The API is served at `/graphql`. You can explore it using the GraphQL Playground (available in development) or any GraphQL client like Insomnia or Postman.


## Development Notes

- Prisma Client is generated into `node_modules/@prisma/client` — run `npx prisma generate` after any schema change.
- GraphQL Playground is enabled in `development` mode and disabled in `production`.
- TypeScript strict mode is enabled; all types must be explicitly defined.

