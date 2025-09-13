# bun-fastmcp

> Template for MCP server using Bun and FastMCP

## Quick Start

```sh
npx degit metonym/template#bun-fastmcp bun-fastmcp
cd bun-fastmcp
bun i
```

## Local Development

Run the dev server locally using the `--hot` flag. Bun will automatically restart the server when you make changes to the code.

```sh
bun dev:mcp
```

Next, you can preview the service using the FastMCP CLI.

```sh
bun dev:inspect
```

## Production

No transpilation is required for production.

```sh
bun run start
```
