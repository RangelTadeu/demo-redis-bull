<h3 align="center">
  Using Redis and Bull to run jobs in backgroud or in another structure. Reactive Programming.
</h3>

## Requirement

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Redis](https://hub.docker.com/_/redis/) I really recommend use Docker for this task =)

## Installation

1. Run `yarn` to install dependencies;
2. Change the redis info in `.env`;

## Run

1. Run `yarn dev` to initiale in dev mode or `yarn start` for production mode.
2. Run `yarn queue` in another terminal to initiale the server that will proccess the backgroud tasks

## Usage

1. Take a look in `src/routes.js` and call the routes to see the results of each one running the same function. I recommend [Insomnia](https://insomnia.rest/) for this task =)
2. To see de Bull Dashboard use this route in your browser: `/admin/queues`
