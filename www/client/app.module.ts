import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { routing } from './app.routing';

import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
        Ng2BootstrapModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LeftmenuComponent,
        NAV_DROPDOWN_DIRECTIVES,
        SIDEBAR_TOGGLE_DIRECTIVES,
        BreadcrumbsComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }