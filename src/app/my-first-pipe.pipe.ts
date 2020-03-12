import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: string, V_Limits:number): any {
    if(!value) return null;
  let y =  (V_Limits)?V_Limits : 9;
    return value.substr(4,y)

  }

}
