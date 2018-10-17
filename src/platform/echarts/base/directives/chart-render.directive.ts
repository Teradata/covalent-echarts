import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[chartRender]',
})
export class ChartRenderDirective {

    private delay: number = 100;

  @Input()
  set chartRenderDelay(value: number) {
    if (value) {
    this.delay = value;
    }
  }

  @Input()
  set chartRender(rerender: boolean) {
    // use timeout to hault the rerendering to play nicely with surrounding UI elements
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, this.delay);

  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }
}
