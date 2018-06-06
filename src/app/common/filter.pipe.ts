import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Movie[], args: string = ""): Movie[] {
    console.log('arg: ', args);
    let result:Movie[];
    return value.filter(item => item.title.toLowerCase().includes(args.toLowerCase()));  
  }

}
