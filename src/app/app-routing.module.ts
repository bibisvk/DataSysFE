import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {NgModule} from "@angular/core";
import {AutoStrankaComponent} from "./Auta/auto-stranka/auto-stranka.component";
import {CustomersStrankaComponent} from "./Zakaznici/customers-stranka/customers-stranka.component";
import {BorrowingStrankaComponent} from "./Vypozicky/borrowing-stranka/borrowing-stranka.component";

const routes: Routes = [
  {
    path: 'auto',
    component: AutoStrankaComponent
  },
  {
    path: 'customer',
    component: CustomersStrankaComponent
  },
  {
  path: 'borrowing',
  component: BorrowingStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
