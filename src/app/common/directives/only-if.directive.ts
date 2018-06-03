import { Directive, ViewContainerRef, TemplateRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyIf]'
})
export class OnlyIfDirective implements AfterViewInit {

  @Input() appOnlyIf:boolean = false;
  private hasView:boolean = false;
  
  constructor(private viewContainerRef:ViewContainerRef, private templateRef:TemplateRef<any>) { }

  ngAfterViewInit() {
    if (!this.appOnlyIf && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.appOnlyIf && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

}
