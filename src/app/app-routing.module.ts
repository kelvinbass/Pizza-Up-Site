import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './shared/cardapio/cardapio.component';
import { OrderComponent } from './shared/order/order.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: 'home',
  component: HomeComponent,
}, {
  path: 'cardapio',
  component: CardapioComponent,
}, {
  path: 'pedido',
  component: OrderComponent,
}, {
  path: '**',
  component: ErrorPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
