<h1>Stack Example</h1>

import { Component } from '@stencil/core';

@Component({
  tag: 'demo-heading',
  styleUrl: 'demo-heading.css',
  shadow: false
})

export class DemoTriangle {
  render() {
    return [
        <h1>
            <slot />
        </h1>
    ];
  }
}