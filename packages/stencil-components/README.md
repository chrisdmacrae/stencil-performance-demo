# Stencil Component Starter

## Getting Started

To get started run:

```bash
npm install
npm start
```

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
## How this works

Stencil takes the Stencil components found in `src/components/` and creates a distribution bundle in the `dist/` folder.

The distribution bundle is as follows:
```
|- collection/                      => the uncompressed web component bundle
|- stencil-components/              => the compressed web component bundle
|- types/                           => typescript definitions
|- stencil-components.js            => the application entrypoint (2kb)
```

This project is set up as a deployable NPM package, with `dist/stencil-components.js` being the entrypoint defined in `package.json` under the `main` key.

When importing `stencil-components` into the sample project's codebase, this is the file that is packaged in your application bundle.

When your application is requested by your user, this tiny 2kb entrypoint will lazily load in each UI component, any necessary polyfills, and web component boilerplate code as it is needed. This makes stencil components extremely lightweight and performant.

However, this means components are _not_ imported into the application like traditional JS framework components.

Instead, the distribution bundle must be included in your built application as _static files_ so that they can be lazy loaded by the entrypoint.

## Benefits

- tiny size in your initial application bundle
- native web components -- works with ANY framework that uses HTML
- all components are separate, hashed files. these can be cached at the edge, and only _changed_ components will ever be re-requested by the browser.
- extremely efficient async rendering and painting of UI
- JSX & reactive data binding
- Support for CSS, Sass, Less, PostCSS
- Support for Webpack
- TypeScript typing to prevent bad data flow