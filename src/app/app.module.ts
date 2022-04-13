import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AutoFormularComponent } from './Auta/auto-formular/auto-formular.component';
import {RouterModule} from "@angular/router";
import { AutaZoznamComponent } from './Auta/auta-zoznam/auta-zoznam.component';
import { AutoStrankaComponent } from './Auta/auto-stranka/auto-stranka.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersZoznamComponent } from './Zakaznici/customers-zoznam/customers-zoznam.component';
import { CustomersStrankaComponent } from './Zakaznici/customers-stranka/customers-stranka.component';
import { CustomersFormularComponent } from './Zakaznici/customers-formular/customers-formular.component';
import {BorrowingFormularComponent} from "./Vypozicky/borrowing-formular/borrowing-formular.component";
import {BorrowingStrankaComponent} from "./Vypozicky/borrowing-stranka/borrowing-stranka.component";
import {BorrowingZoznamComponent} from "./Vypozicky/borrowing-zoznam/borrowing-zoznam.component";


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

    BorrowingFormularComponent,
    BorrowingStrankaComponent,
    BorrowingZoznamComponent

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
