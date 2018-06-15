// StencilComponents: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stencil-components.core.js';
import {
  DemoDot,
  DemoTriangle,
  DemoTriangle
} from './stencil-components.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    DemoDot,
    DemoTriangle,
    DemoTriangle
  ], opts);
}