# API

Learning Portrait API is a Next.sjs application with microservice API routes. It's a Next.js application with a Prisma ORM.

## Getting Started

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

http://local.learningportrait.com:3800/

## Migrations

Use [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production) commands in development and production environments.

### Dev

Use the migrate dev command to generate and apply migrations:

```bash
$ yarn db:migrate:dev
```

### Reset

Reset the database to undo manual changes or experiments by running:

```bash
$ yarn db:migrate:reset
```

### Deploy

In production and testing environments, use the migrate deploy command to apply migrations:

```bash
$ db:migrate:deploy
```

> **Note:** migrate deploy should generally be part of an automated CI/CD pipeline, and we do not recommend running this command locally to deploy changes to a production database.

## References

-   [Next.js](https://nextjs.org/)
-   [Prisma](https://www.prisma.io/)
