import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',

})
export class OrderComponent { 
 
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] =[
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    } ,

    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    } ,
   
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    } ,

    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    } ,

  ] 

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero){
      this.orderBy = value
  }
}
