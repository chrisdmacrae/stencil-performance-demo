/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface DemoDot {
      'size': number;
      'text': string;
      'x': number;
      'y': number;
    }
  }

  interface HTMLDemoDotElement extends StencilComponents.DemoDot, HTMLStencilElement {}

  var HTMLDemoDotElement: {
    prototype: HTMLDemoDotElement;
    new (): HTMLDemoDotElement;
  };
  interface HTMLElementTagNameMap {
    'demo-dot': HTMLDemoDotElement;
  }
  interface ElementTagNameMap {
    'demo-dot': HTMLDemoDotElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'demo-dot': JSXElements.DemoDotAttributes;
    }
  }
  namespace JSXElements {
    export interface DemoDotAttributes extends HTMLAttributes {
      'size'?: number;
      'text'?: string;
      'x'?: number;
      'y'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DemoHeading {

    }
  }

  interface HTMLDemoHeadingElement extends StencilComponents.DemoHeading, HTMLStencilElement {}

  var HTMLDemoHeadingElement: {
    prototype: HTMLDemoHeadingElement;
    new (): HTMLDemoHeadingElement;
  };
  interface HTMLElementTagNameMap {
    'demo-heading': HTMLDemoHeadingElement;
  }
  interface ElementTagNameMap {
    'demo-heading': HTMLDemoHeadingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'demo-heading': JSXElements.DemoHeadingAttributes;
    }
  }
  namespace JSXElements {
    export interface DemoHeadingAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DemoTriangle {
      's': number;
      'seconds': number;
      'x': number;
      'y': number;
    }
  }

  interface HTMLDemoTriangleElement extends StencilComponents.DemoTriangle, HTMLStencilElement {}

  var HTMLDemoTriangleElement: {
    prototype: HTMLDemoTriangleElement;
    new (): HTMLDemoTriangleElement;
  };
  interface HTMLElementTagNameMap {
    'demo-triangle': HTMLDemoTriangleElement;
  }
  interface ElementTagNameMap {
    'demo-triangle': HTMLDemoTriangleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'demo-triangle': JSXElements.DemoTriangleAttributes;
    }
  }
  namespace JSXElements {
    export interface DemoTriangleAttributes extends HTMLAttributes {
      's'?: number;
      'seconds'?: number;
      'x'?: number;
      'y'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;