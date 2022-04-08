import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AutoFormularComponent } from './auto-formular/auto-formular.component';
import {RouterModule} from "@angular/router";
import { AutaZoznamComponent } from './auta-zoznam/auta-zoznam.component';
import { AutoStrankaComponent } from './auto-stranka/auto-stranka.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersZoznamComponent } from './customers-zoznam/customers-zoznam.component';
import { CustomersStrankaComponent } from './customers-stranka/customers-stranka.component';
import { CustomersFormularComponent } from './customers-formular/customers-formular.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AutoFormularComponent,
    AutaZoznamComponent,
    AutoStrankaComponent,
    CustomersZoznamComponent,
    CustomersStrankaComponent,
    CustomersFormularComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
