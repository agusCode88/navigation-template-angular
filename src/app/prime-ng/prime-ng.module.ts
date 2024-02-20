import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
   exports:[
      CommonModule,
      MenuModule,
      MenubarModule
   ]
})
export class PrimeNgModule { }
