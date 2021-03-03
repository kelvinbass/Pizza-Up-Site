import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HeaderComponent } from './components/header/header.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';


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
    NgxMaskModule.forRoot(),
  ],

  exports: [
    HeaderComponent,
    CardapioComponent,
    OrderComponent
  ]
})
export class SharedModule { }