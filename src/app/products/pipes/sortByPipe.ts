
import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interfaces";

//agustin | toogleCase = 'AGUSTÍN'
//AGUSTIN | toogleCase = 'agustín'

@Pipe({
    name:'sortBy'
})
export class SortByPipe implements PipeTransform {

    //  KeyOf , cualquier atributo de Hero puede ser ordenado, el valor nulo tambie puede serlo
    transform( heroes: Hero[] , sortBy?: keyof Hero | '' ): Hero[] {

       switch( sortBy ){

        case 'name':
            return heroes.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 );

        case 'canFly':
            return heroes.sort( (a,b) => ( a.canFly > b.canFly ) ? 1 : -1 );    

        case 'color':
            return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );
            
        default:
            return heroes;    

       }
    }

}