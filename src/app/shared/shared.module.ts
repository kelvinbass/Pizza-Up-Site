import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardapioComponent,
    OrderComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardapioComponent,
    OrderComponent
  ]
})
export class SharedModule { }