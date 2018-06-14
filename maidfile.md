# Stencil Demo

This file handles all of the tasks for this demo project, using [`maid`](https://github.com/egoist/maid/).

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

## clean

This task removes the distribution build from every package.

```bash
lerna exec "rm -rf ./dist/ && rm -rf ./www/" --ignore=stencil-components
```