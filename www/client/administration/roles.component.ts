import { Component, ViewChild, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Role } from '../models/role';
import { RoleService } from './roles.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'client/administration/role.component.html',
  providers: [RoleService]
})

export class RolesComponent implements OnInit, AfterViewInit {
  roles: Role[];
  selectedRole: Role;

  @ViewChild(ModalDirective) myModal: ModalDirective;
  @Output('dialogResult') DialogResult: EventEmitter<string> = new EventEmitter<string>();

  constructor(private roleService: RoleService) {
    console.log("myModal constructor");
  }

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.roleService.create(name)
    .then(role => {
      this.roles.push(role);
      this.selectedRole = null;
    });
}
delete(role: Role): void {
  this.roleService
      .delete(role.id)
      .then(() => {
        this.roles = this.roles.filter(h => h !== role);
        
        if (this.selectedRole === role) { 
          this.selectedRole = null; 
        }
      });
}
  onSelect(role: Role): void {
    this.selectedRole = role;
  }

  getRoles(): void {
    this.roleService.getRoles().then(roles => this.roles = roles);
  }





  // Modal Methods
  public ok() {
    this.myModal.hide();
    this.DialogResult.emit("ok");
    console.log("ok")
  }

  public cancel() {
    this.myModal.hide();
    this.DialogResult.emit("cancel");
    console.log("cancel")
  }

  public show() {
    this.myModal.show();
    console.log("show")
  }

  public onhideDialog() {
    console.log("onhide")
  }

  ngOnInit() {
    console.log("myModal inti");
    this.getRoles();
  }

  ngAfterViewInit() {
    this.myModal.config.backdrop = false;
    console.log("myModal view init");
  }

}
