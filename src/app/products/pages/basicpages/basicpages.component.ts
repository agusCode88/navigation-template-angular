import { Component } from '@angular/core';

@Component({
  selector: 'app-basicpages',
  templateUrl: './basicpages.component.html',
  styleUrl: './basicpages.component.css'
})
export class BasicpagesComponent {
  
  public nameLower: string = 'Fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fErNando hErRera';
  public customDate: Date = new Date();

   constructor(){
    
   }
}
