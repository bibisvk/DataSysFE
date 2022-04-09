import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {NgModule} from "@angular/core";
import {AutoStrankaComponent} from "./auto-stranka/auto-stranka.component";
import {CustomersStrankaComponent} from "./customers-stranka/customers-stranka.component";

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
