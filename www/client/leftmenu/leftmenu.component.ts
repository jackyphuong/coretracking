import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

@Component({
    selector: 'my-leftmenu',
    templateUrl: 'client/leftmenu/leftmenu.component.html'
})

export class LeftmenuComponent implements OnInit {
    constructor( private router: Router ) { }
    
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