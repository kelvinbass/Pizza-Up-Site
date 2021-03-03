import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardapioComponent,
    OrderComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  exports: [
    HeaderComponent,
    CardapioComponent,
    OrderComponent
  ]
})
export class SharedModule { }