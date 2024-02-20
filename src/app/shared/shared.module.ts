import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAppComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    MenuAppComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MenuModule,
  ],
  exports:[
    MenuAppComponent
  ]
})
export class SharedModule { }
