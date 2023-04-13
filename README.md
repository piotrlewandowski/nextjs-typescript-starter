# Next.js TypeScript Starter

This is a [Next.js](https://nextjs.org/) TypeScript Starter bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It contains:
- [Next.js](https://nextjs.org/) 13.3.0
- [React](https://reactjs.org/) 18.2.0
- [TypeScript](https://www.typescriptlang.org/) 5.0.4
- [Next.js Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh)
- Sass/SCSS support
- ES6 linting
- Stylelint
- Prettier
- Commitizen
- Linting files and commit messages on commit

## Getting Started

1. Clone the repository `gh repo clone piotrlewandowski/nextjs-typescript-starter` (or if you're not using GitHub CLI: `git clone git@github.com:piotrlewandowski/nextjs-typescript-starter.git`)
2. If you're using NVM run `nvm use` inside project directory to use node version set in `.nvmrc` file
3. Run `npm install` or `npm i` to install all the dependencies
4. To begin development task, run `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Available commands

- `npm run dev` - starts Next.js in development mode and watch for changes

- `npm start` - starts a Next.js production server

  The page will reload if you make edits.

- `npm run build` - builds the application for production usage

  It bundles React in production mode and optimizes the build for the best performance.<br />
  The build is minified and the filenames include the hashes.

- `npm run eslint:check` - execute eslint check

- `npm run eslint:fix` - execute eslint check and automatically fix problems

- `npm run stylelint:check` - execute stylelint check

- `npm run stylelint:fix` - execute stylelint check and automatically fix problems

- `npm run analyze` - generate interactive treemap visualization of the contents of the bundles (both server and client bundles)

- `npm run analyze:server` - generate visualization of the server bundles

- `npm run analyze:browser` - generate visualization of the client bundles
