import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() color = 'green';
  @Input() isHiglight = false;
  constructor(
    private elementREf: ElementRef,
    private renderer: Renderer2 //Ivy
  ) { }

  highlight() {
    this.renderer.setStyle(this.elementREf.nativeElement,
      'background',
      this.isHiglight ? this.color : 'inherit'
    )
  }
  ngOnChanges() {
    this.highlight();
  }
}
