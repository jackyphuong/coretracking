
import { Component, ViewContainerRef  } from '@angular/core';
//import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'my-app',
    templateUrl: 'client/app.component.html'
})

export class AppComponent{
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
      // You need this small hack in order to catch application root view container ref
      this.viewContainerRef = viewContainerRef;
  }
}
