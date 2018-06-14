import { Component, Input, Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  start: number;
  @Input() elapsed: number = 0

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.start = Date.now();
    window.requestAnimationFrame(this.update.bind(this));
  }

  update() {
    this.elapsed = Date.now() - this.start
    window.requestAnimationFrame(this.update.bind(this));
  }
}