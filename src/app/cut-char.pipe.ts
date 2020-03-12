import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutChar'
})
export class CutCharPipe implements PipeTransform {

  transform(value: string, limit:any): any {
    return null;
    let o = (limit)?limit : 10;
    value.substr(0,o).toUpperCase();
  }

}
