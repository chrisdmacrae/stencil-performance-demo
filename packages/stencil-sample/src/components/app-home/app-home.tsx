import "stencil-components"
import { Component, Element, Prop, State } from '@stencil/core'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false
})

export class AppHome {
  @Element() el: HTMLElement;

  @Prop() elapsed: number = 0;

  @State() seconds: number = 0;
  @State() scale: number = 0;

  intervalId: number = 0;

  componentDidLoad() {
    const tick: Function = this.tick.bind(this);
    this.intervalId = window.setInterval(tick, 1000);
  }

  componentDidUpdate() {
    const elapsed = this.elapsed;
    const t = (elapsed / 1000) % 10;
    this.scale = 1 + (t > 5 ? 10 - t : t) / 10;
  }

  tick() {
    this.seconds = (this.seconds % 10) + 1;
  }

  render() {
    this.el.style.setProperty('--scale', `${this.scale}`)

    return (
      <div id="stencilApp">
        <demo-heading>
          Stencil Example
        </demo-heading>
        <main>
          <demo-triangle
            x={0}
            y={0}
            s={1000}
            seconds={this.seconds}
          >
          </demo-triangle>
        </main>
      </div>
    );
  }
}
