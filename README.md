# Turborepo monorepo template starter

This is an official React monorepo template starter powered by Turborepo.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: A placeholder documentation site powered by [Next.js](https://nextjs.org)
- `@halil07/core`: core React components
- `@halil07/utils`: shared React utilities
- `@halil07/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `@halil07/eslint-preset`: ESLint preset

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

We do not have a starter yet in `create-turbo` for this quite yet. If you want to use this in the interim, you run the following command:

```sh
npx degit halil07/example-monorepo my-mono-repo
cd my-mono-repo
yarn
yarn dev
```

### Changing the NPM organization scope

The NPM organization scope for this design system starter is `@halil07`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `halil07` with your desired scope
- Search and replace `halil07` with your desired scope
- Re-run `yarn install`
