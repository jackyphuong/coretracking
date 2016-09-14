import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-header',
    templateUrl: 'client/header/header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router) { }

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void { }
}