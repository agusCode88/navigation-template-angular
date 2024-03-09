
import { Pipe, PipeTransform } from "@angular/core";

//agustin | toogleCase = 'AGUSTÍN'
//AGUSTIN | toogleCase = 'agustín'

@Pipe({
    name:'canFly'
})
export class CanFlyPipe implements PipeTransform {

    transform( canFly: boolean = false ): 'vuela' | 'no vuela' {
         return canFly ? 'vuela' : 'no vuela';
    }

}