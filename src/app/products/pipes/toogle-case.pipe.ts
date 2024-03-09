import { Pipe, PipeTransform } from "@angular/core";

//agustin | toogleCase = 'AGUSTÍN'
//AGUSTIN | toogleCase = 'agustín'

@Pipe({
    name:'toogleCase'
})
export class ToogleCasePipe implements PipeTransform {

    transform( value: string, toUpeer: boolean = false ): string {
         return ( toUpeer ) 
            ? value.toUpperCase() 
            : value.toLowerCase();
    }

}