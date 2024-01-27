# App

## Getting Started

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

## User Auth

This `app` uses [NextAuth.js](https://authjs.dev/) for user authentication.

Generate a encryption key for NextAuth.js JWT (_e.g.,_ `NEXTAUTH_SECRET` ).

```bash
$ openssl rand -base64 32
```

## References

-   [NextAuth.js](https://next-auth.js.org)
