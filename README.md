# Sandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.
We are running https://storybook.js.org/releases/6.4 of storybook for Angular compatability.


In this architecture `.story` decorated components are confined to the `stories` folder, this is an organizational decision, there is no technical reason.



The `button-implementation.component` then extends the `stories/button-component`, referencing it's template and style files directly and implementing it's own click handler.

## Storybook server

Run `npm run storybook` for the storybook server. 

## Development server

Run `ng serve` or `npm start` to start the angular dev server.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

