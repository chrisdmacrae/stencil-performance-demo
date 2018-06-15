# AngularSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Integration with Stencil
Stencil is integrated by doing things in three places:

- In `src/app/app.module.ts` we import Angular's `CUSTOM_ELEMENTS_SCHEMA` and add that to our application's schema to allow for custom web elements in our component markup.
- In `src/index.html` we add a `script` tag to our application entrypoint that references the Stencil component manifest
- In `angular.json` we get angular to copy the component distributibles to the build directory using `projects.angular-sample.architect.assets`.

Now when we use Stencil components in our Angular components, the Stencil component manifest will handle discovery, lazy loading, and rendering of our custom web components automatically.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
