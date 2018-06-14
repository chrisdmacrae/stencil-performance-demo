import { Component, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  scale: number = 1
  
  @Input() seconds: number = 0
  @Input() elapsed: number = 0

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {
    setInterval(this.tick.bind(this), 1000)
  }

  ngOnChanges() {
    this.setScale()
    this.setStyles()
  }

  tick() {
    console.log(this.elapsed)
    const seconds = (this.seconds % 10) + 1;
    this.seconds = seconds
  }

  setScale() {
    const elapsed = this.elapsed;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    this.scale = scale
  }

  setStyles() {
    this.renderer.setAttribute(this.el.nativeElement, "style", `--scale: ${this.scale}`)
  }

}
