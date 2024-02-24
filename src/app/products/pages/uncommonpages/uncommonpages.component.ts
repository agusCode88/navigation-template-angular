import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommonpages',
  templateUrl: './uncommonpages.component.html',
  styleUrl: './uncommonpages.component.css'
})
export class UncommonpagesComponent {


  // 18n Select
  public name:string = 'Agustín';
  public gender: 'male'| 'female'= 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public clientsMaps = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    '=3':'tenemos 3 clientes esperando',
    '=4':'tenemos 4 clientes esperando',
    '=5':'tenemos 5 clientes esperando',
    '=6':'tenemos 6 clientes esperando',
    '=7':'tenemos 7 clientes esperando',
    '=8': 'tenemos 8 clientes esperando', 
    '=9': 'tenemos 9 clientes esperando', 
    '=10': 'tenemos 10 clientes esperando', 
    '=other':' tenemos # cliente esperando',
  }

  public clients: string[] = ['María','Pedro','Claudia','Natalia','Daniela','Daniel','Agustín','Tannia','Francisco','Javier']

  public person = {
     name: 'Fernando',
     age: 36,
     adress:'Los Andes, Chile'
  }

  public myObservableTimer: Observable<number> = interval(2000).pipe(
       tap(value => console.log('tap',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve , reject)=>{
       setTimeout(()=>{
        resolve('Tenemos data en la promesa');
       },3500);
  })

  changeClient() {
      this.name = 'Melissa';
      this.gender = 'female';

    }

    deleteClient() {
      this.clients.shift();

    }
}
