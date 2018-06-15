# Stencil Demo

This file handles all of the tasks for this demo project, using [`maid`](https://github.com/egoist/maid/).

Every h2 with a code block is a command. E.g, `maid start`.

## start

This task spins up a unique development server for every package.

Run tasks `clean`, `prebuild` before this in parallel

```bash
lerna exec "yarn start" --ignore=stencil-components
```

## prebuild

Ensure components are built before running

```bash
lerna exec "rm -rf ./dist/" --scope=stencil-components
lerna exec "yarn build" --scope=stencil-components
```

## build

This task creates a distribution build for every package.

Run tasks `clean` before this in parallel

```bash
lerna exec "yarn build" --ignore=stencil-components
```

## postbuild

Gets the build contents of all packages and moves them into a deploy directory

```bash
mkdir -p ./build
cp -r ./src/ ./docs/
cp -r ./packages/angular-sample/dist/angular-sample/ ./docs/angular-sample/
cp -r ./packages/html-sample/build/ ./docs/html-sample/
cp -r ./packages/react-sample/build/ ./docs/react-sample/
cp -r ./packages/stencil-sample/www/ ./docs/stencil-sample/
```

## clean

This task removes the distribution build from every package.

```bash
lerna exec "rm -rf ./dist/ && rm -rf ./www/" --ignore=stencil-components
```