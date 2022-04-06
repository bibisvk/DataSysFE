import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {NgModule} from "@angular/core";
import {AutoStrankaComponent} from "./auto-stranka/auto-stranka.component";

const routes: Routes = [
  {
    path: 'auto',
    component: AutoStrankaComponent
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
