import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
     path: '', 
     loadChildren: () => import('./products/products.module')
        .then(m => m.ProductsModule)
   },
  // Otras rutas
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
