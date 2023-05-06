import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(item: any[], querystring:string): any[] {
    return item.filter(p=>{
      return p.name.toLowerCase().includes(querystring.toLowerCase());
    });
  }

}
