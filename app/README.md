# App

This the primary Learning Portrait user-facing web application.

## Getting Started

### Setup

#### Environment Variables

Add the following environment variables to your `.env` file:

-   `NEXTAUTH_URL`
-   `NEXTAUTH_SECRET`

#### Create a Secret

-   `openssl rand -hex 32 | pbcopy`
-   https://generate-secret.now.sh/32

### Install

```bash
$ yarn
```

### Build

```bash
$ yarn build
```

### Start

```bash
$ yarn start
```

### Develop

```bash
$ yarn dev
```

-   https://localhost:3000/
-   https://local.learningportrait.com:3000/
