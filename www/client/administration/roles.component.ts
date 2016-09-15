import { Component, ViewChild   } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'client/administration/role.component.html'
})

export class RolesComponent {
  @ViewChild('childModal') public childModal:ModalModule;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
