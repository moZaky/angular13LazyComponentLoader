import { Component, OnInit, Type, ViewChild,OnDestroy} from '@angular/core';
import { DynamicChildLoaderDirective } from 'src/app/diretives/dynamic-child-loader.directive';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit,OnDestroy {
 
  @ViewChild(DynamicChildLoaderDirective, { static: true })
dynamicChild!: DynamicChildLoaderDirective;


  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.dynamicChild.viewContainerRef.clear();
  }
  protected loadDynamicComponent(component:Type<any>) {
    this.dynamicChild.viewContainerRef.createComponent(component);
  }
  protected hideComponent() {
    this.dynamicChild.viewContainerRef.clear();
  }

}
