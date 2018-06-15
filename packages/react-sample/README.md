# React Sample

A sample React application bootstrapped with `create-react-app` to show off integration with Stencil.

## Integrating with Stencil
Stencil is integrated by doing things in three places:

- In the application mount (`src/index.js`) Stencil is imported; this handles adding the component manifest to the application under the hood via Webpack.
- In `package.json` a `prebuild` and `prestart` command was added to handle copying the Stencil component bundle to the built application's static directory `public/static`

Now when we use Stencil components in our React components, the Stencil component manifest will handle discovery, lazy loading, and rendering of our custom web components automatically.
