# Sandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.
We are running https://storybook.js.org/releases/6.4 of storybook for Angular compatability.

For compatibility with all processes please `nvm use 16`

In this architecture `.story` decorated components are confined to the `stories` folder, this is an organizational decision, there is no technical reason.



The `button-implementation.component` then extends the `stories/button-component`, referencing it's template and style files directly and implementing it's own click handler.

## Development server

Run `ng serve` or `npm run start` to start the angular dev server.

## Storybook server

Run `npm run storybook` for the [Storybook](https://storybook.js.org/) server.
While Storybook is running, Run `npm run loki test` for [Loki](https://loki.js.org/) regression checking.

## Documentation server

Run `npm run docs:serve` for the [Compodoc](https://compodoc.app/) server.

## Running unit tests with Jest

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `npm run cypress:run` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Running full dev environment

Run `npm run all` to start the dev server and initialize Storybook, unit testing, and e2e. regression testing needs to be run manually at this point.

