import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicpagesComponent } from './pages/basicpages/basicpages.component';
import { NumberpagesComponent } from './pages/numberpages/numberpages.component';
import { UncommonpagesComponent } from './pages/uncommonpages/uncommonpages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sortByPipe';




@NgModule({
  declarations: [
    BasicpagesComponent,
    NumberpagesComponent,
    UncommonpagesComponent,
    OrderComponent,

    //Pipes
    ToogleCasePipe,
    CanFlyPipe,
    SortByPipe

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ],
  exports:[
    
  ]
})
export class ProductsModule { }
