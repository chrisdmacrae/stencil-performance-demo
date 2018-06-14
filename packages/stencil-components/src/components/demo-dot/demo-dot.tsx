import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'demo-dot',
  styleUrl: 'demo-dot.css',
  shadow: false
})

export class DemoDot {
  @Element() el: HTMLElement;

  @Prop() size: number;
  @Prop() x: number;
  @Prop() y: number;
  @Prop() text: string;

  @State() hover: boolean = false;

  enter() {
    this.hover = true;
  }

  leave() {
    this.hover = false;
  }

  hostData() {
    return {
      onmouseenter: this.enter.bind(this),
      onmouseleave: this.leave.bind(this)
    };
  }

  render() {
    this.el.style.setProperty('--size', `${this.size}`)
    this.el.style.setProperty('--x-coord', `${this.x}`)
    this.el.style.setProperty('--y-coord', `${this.y}`)

    return (
      <div class="demo-dot">
        {this.hover ? '**' + this.text + '**' : this.text}
      </div>
    );
  }
}