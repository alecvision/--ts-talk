# The "HOW" and "WHY" of TypeScript

This repo contains resources from my talk on Tuesday, Auguest 16 2022 for the OCK WebDevs UserGroup (part of the Techlahoma Foundation).

## Resources:
All of the examples in this repo (and many more!) can be found here: https://github.com/dzharii/awesome-typescript

**_HIGHLIGHTS_**
[Matt Pocock on Youtube](https://www.youtube.com/c/MattPocockUk): Excellent TypeScript pro-tips in bite-size chuncks
[Jack Herrington on Youtube](https://www.youtube.com/c/JackHerrington): Fun, fast-paced videos covering so many full-stack TypeScript technologies, with a focus on production environments.
[No BS TS](https://no-bs-ts.myshopify.com/): A book that's all about getting you up to speed on TypeScript as fast, and as practically as possible.
[TypeScript Cheat Sheets](https://github.com/typescript-cheatsheets): A collection of the best TypeScript cheatsheets for almost any framework!
[ts-migrate](https://github.com/airbnb/ts-migrate/tree/master/packages/ts-migrate): A tool to help migratge your JavaScript codebase to TypeScript
[Prisma](https://www.prisma.io/) A Node.js/TypeScript ORM with powerful tools for generating APIs and Schemas from existing databases
[Zod](https://github.com/colinhacks/zod): A TypeScript first runtime validation library
[tRPC](https://github.com/trpc/trpc): End-to-end type-safe APIs without GraphQL
[prisma-trpc-generator](https://github.com/omar-dulaimi/prisma-trpc-generator): Auto-generate tRPC APIs from your Prisma schemas
[zod-prisma](https://github.com/CarterGrimmeisen/zod-prisma): Automatically generate Zod validators from your Prisma schemas
[transform.tools](https://transform.tools/) A tool that can help transform code between Flow/Typescript/JSON Schema/GraphQL and so much more!
[FreeCodeCamp: How to add TypeScript to a JavaScript Project](https://www.freecodecamp.org/news/how-to-add-typescript-to-a-javascript-project/)
To run an example, first fork this repository and `cd` into the directory. Then, follow the instructions for the example below.

## Example 1: Prisma + tRPC + Postgres + Zod

Prerequisites:
You will need [docker installed and running](https://docs.docker.com/get-docker/), and preferably a VSCode based editor. Credit for the sample SQL server goes to 
José David Arévalo (you can find out more in that directory's README.md).

*Run the sql server:*
```bash
cd ./docker_postgres_with_data
docker-compose up -d
cd ../prisma
```

*Install deps and create env variables:*

```bash
yarn install
touch .env
echo DB_URL='"postgresql://postgres:postgres@localhost:5438/postgres?schema=public"' >> ./.env
```

*Infer the schema from the SQL server:*
```bash
npx prisma db pull
```

Now you should see schema.prisma has been updated to include an auto-generated schema!

*Generate router (tRPC), validator (Zod), and database resolvers (Prisma):*

```bash
npx prisma generate
```

You should now see two new directories:
 - `src/trpc`: Contains routers and schemas for your new type-safe API
 - `src/zod`: Contains generated Zod validator functions

### Bonus Points
 - Run  `npx tsc` to compile your new code to JavaScript, and you'll see a new folder: `lib/` containing the generated javascript codebase!