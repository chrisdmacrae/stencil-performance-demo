# HTMLSample

This project was hand-crafted by @chrisdmacrae under the toiling summer suns of Prince Edward Island.

## Browsersync
Browsersync is used to dynamically serve the Stencil component bundle from `node_modules` and the static file from `src`.

## Build
At build time, the Stencil component bundle and the src files are simply copied to the build directory.

## Integration with Stencil
All that is needed for a static integration of stencil is:

- Copying the component bundle to the root of your build
- Referencing the component manifest from a script tag in your HTML files

Now when we use Stencil components in our HTML markup, the Stencil component manifest will handle discovery, lazy loading, and rendering of our custom web components automatically.