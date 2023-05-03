import { Directive, ViewContainerRef, OnDestroy } from '@angular/core';
    
@Directive({
  selector: '[dynamicChildLoader]',
})
export class DynamicChildLoaderDirective implements OnDestroy{
  constructor(public viewContainerRef: ViewContainerRef) {}
  ngOnDestroy(): void {
      this.viewContainerRef.clear()
  }
}