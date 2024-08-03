FROM oven/bun

WORKDIR /usr/src/app
COPY . .

RUN bun install
RUN bun run build

ENV NODE_ENV production
CMD ["bun", "start"]
