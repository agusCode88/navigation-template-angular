import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicpagesComponent } from './pages/basicpages/basicpages.component';
import { NumberpagesComponent } from './pages/numberpages/numberpages.component';
import { UncommonpagesComponent } from './pages/uncommonpages/uncommonpages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicpagesComponent,
    NumberpagesComponent,
    UncommonpagesComponent
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
