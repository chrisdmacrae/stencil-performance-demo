# Stencil Talk

The example repository for my Stencil Talk.

## Overview

Stencil is a compiler for native web components based on the custom component v1 spec.

It allows us to create encapsulated components that have HTML, CSS, and JS logic, and use them in any frontend framework we like.

It also serves as a frontend framework itself.

## What this demo is for

This demo illustrates 3 things:

1. That Stencil creates truly future-proof, interoperable web components for web applications
2. That Stencil is a viable frontend framework itself
3. That Stencil is _very performant_.

## Structure

```
|- angular-sample => A basic Angular application generated with angular-cli
|- html-sample => A static HTML site served with browsersync
|- react-sample => A basic `create-react-app` React project
|- stencil-sample => A basic stencil application generated with `npm init stencil`
|- stencil-components => A stencil component library that we use to show interoperability between all sample apps.
```

## Stencil Component Example

The `stencil-component/` folder is an example stencil project that generates a distributable stencil UI kit, which is then in turn used by the sample projects as an NPM dependency to show off interoperability of the compiled web components.

## `type`-sample

Each `-sample` package is an example of how to integrate Stencil with that specific framework & stack.

See the `README.md` in each package for instructions/explanations.

## Usage
All build commands are executed with lernajs and managed with [maid](./maidfile.md).