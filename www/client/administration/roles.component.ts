import { Component, ViewChild, OnInit, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'client/administration/role.component.html'
})

export class RolesComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalDirective) myModal: ModalDirective;
  @Output('dialogResult') DialogResult: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log("myModal constructor");
  }

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
  }

  ngAfterViewInit() {
    this.myModal.config.backdrop = false;
    console.log("myModal view init");
  }
}
