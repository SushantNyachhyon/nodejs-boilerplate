# NodeJS, Express and Typescript Boilerplate

![nodejs](https://img.shields.io/badge/Nodejs-282C34?style=for-the-badge&logo=node.js)&nbsp;![typescript](https://img.shields.io/badge/Typescript-282C34?style=for-the-badge&logo=typescript)&nbsp;![express](https://img.shields.io/badge/Express-282C34?style=for-the-badge&logo=express)&nbsp;![mongodb](https://img.shields.io/badge/MongoDB-282C34?style=for-the-badge&logo=mongodb)
A [Node.js](https://nodejs.org/en) boilerplate following Enterprise application Structure with Service Repository Pattern.

# Contents

* [Features](#features)
* [Global Requirement](#global-requirement)
* [Install, Configure & Run](#install-configure--run)
* [Available Scripts](#available-scripts)

### Features
* [Node.js](https://nodejs.org/en) with [Express](https://expressjs.com/) framework for RestAPI.
* Use of [Typescript](https://www.typescriptlang.org/) for statically typed business logic.
* Application environment configuration using Dotfiles using [dotenv](https://github.com/motdotla/dotenv) package.
* IOC container and dependency injection using [InversifyJS](https://inversify.io/) and [inversify-express-utils](https://github.com/inversify/inversify-express-utils) package.
* Simple cache management module with [node-cache](https://www.npmjs.com/package/node-cache).
* Typescript Request validation using [zod](https://zod.dev/) library.
* Fully configured [MongoDB](https://www.mongodb.com/) environment with [Mongoose](https://mongoosejs.com/) as a ODM.
* User registration with [bcrypt](https://github.com/kelektiv/node.bcrypt.js) hashing of password with JWT tokens for authentication using [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).
* Beautiful log message using [morgan](https://github.com/expressjs/morgan) midddleware.

### Global Requirement

* node (>= 19.0.0)
* typescript (>= 4.9.4)
* mongoose (>= 3.7.0)

### Install, Configure & Run

```bash
# Clone the repo.
git clone git@github.com:SushantNyachhyon/nodejs-typescript-boilerplate.git;

# cd into the cloned project folder.
cd nodejs-typescript-boilerplate;

# Note: make sure that the database is created

# Install NPM dependencies.
npm install
# or using pnpm
pnpm install

# Edit your DotEnv file.
# copy the example Env file.
cp .env.example .env
# edit the .env file as per your requirement

# Run the app
npm run dev;
# or using pnpm
pnpm run dev
```

### Available Scripts
```bash
# run the dev server
# using npm
npm run dev
# or using pnpm
pnpm run dev
```
```bash
# build the application
# using npm
npm run build
# or using pnpm
pnpm run build
```
```bash
# run linting
# using npm
npm run lint
# or using pnpm
pnpm run lint
```
```bash
# format application code
# using npm
npm run prettier
# or using pnpm
pnpm run prettier
```
