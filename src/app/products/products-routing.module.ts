import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicpagesComponent } from './pages/basicpages/basicpages.component';
import { NumberpagesComponent } from './pages/numberpages/numberpages.component';
import { UncommonpagesComponent } from './pages/uncommonpages/uncommonpages.component';
import { OrderComponent } from './pages/order/order.component';


const routes: Routes = [
  {
    path: '',
    component: BasicpagesComponent
  },
  {
    path: 'numbers',
    component: NumberpagesComponent
  },
  {
    path: 'uncommon',
    component: UncommonpagesComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }