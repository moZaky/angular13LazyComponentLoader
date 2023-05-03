import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent, TestComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  extends BaseComponent implements OnInit {

  title = 'app';
   //@ts-ignore
  // @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef = null;
  showOrHide = false;
  path = "";
  //@ts-ignore
  componentToRender:Type<any>=null;



  // constructor( ) { }
  constructor(
    private container: ViewContainerRef,
     private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }
  override ngOnInit(): void {

  }


  toggleShow() {
    this.showOrHide = !this.showOrHide;

    this.path = './components/test/test.component';

    // this.showOrHide ? this.lazyLoadDirective.createMyComponent(TestComponent) : this.lazyLoadDirective.hideComponent();


    const componentType = this.componentFactoryResolver.resolveComponentFactory(TestComponent).componentType;
    debugger;
    // this.componentToRender=componentType;

    // debugger;
    //  this.lazyLoadDirective.createMyComponent(componentType);
    // this.showOrHide ? this.lazyLoadDirective.createMyComponent(this.container,componentType) : this.lazyLoadDirective.hideComponent(this.container);
      //@ts-ignore
    // this.showOrHide ? this.componentToRender=componentType : this.componentToRender=null;
    // this.showOrHide ? this.path : this.path='';

    this.showOrHide ? this.loadDynamicComponent(componentType) : this.hideComponent();

    // this.showOrHide ?
    //   import('./components/test/test.component').then(m => {
    //     this.container.createComponent(m.TestComponent);

    //   }) :
    //   this.container.clear();

  }


}
