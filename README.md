# bun-trpc-hono

## Stack

- Frontend: Svelte, Tailwind CSS, Vite
- Backend: Hono, Bun, trpc

## Installation

Ensure [Bun](https://bun.sh/docs/installation) is installed.

Then, at the root of the project, install the dependencies:

```sh
bun install
```

You can override the environment variables in the `.env` file with your own values:

- `PORT=3000`
- `SITE_URL=` (default: `http://localhost:3000/`)


```sh
# Create a .env file and fill in the values.
mv .env.template .env
```

### Development

In development, backend and frontend are run separately on different ports.

However, this is a monorepo set-up, so we can run both the backend and frontend in a single command.

```sh
bun dev
```

### Production

To create a local production build:

```sh
bun run build
```

Note that there is no build step for the backend code because Bun can execute TypeScript directly. To run the server locally:

```sh
bun start
```

### Deployment

This project is Dockerized for production deployment.
