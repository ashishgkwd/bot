import { Directive, ElementRef, HostListener, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloatUp]',
})
export class FloatUpDirective implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.updateElementFloat(false);
  }

  @HostListener('dblclick') onclick() {
    console.log('text: ', this.element.nativeElement.textContent);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.updateElementFloat(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.updateElementFloat(false);
  }

  updateElementFloat(float: boolean) {
    this.renderer.setStyle
    if (float) {
      this.element.nativeElement.style.transform = `scale(1.1)`;
    } else {
      this.element.nativeElement.style.transform = `scale(1)`;
      this.element.nativeElement.style.transition = `transform .2s ease-in`;
    }
  }

}
