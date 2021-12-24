import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessText'
})
export class LessTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let tabs = value.split('')

    if(tabs.length > 40) {

      let newContent = tabs.slice(0, 40)

      return newContent.join('') + '...'
    }
    else {
      return value;
    }

  }

}
