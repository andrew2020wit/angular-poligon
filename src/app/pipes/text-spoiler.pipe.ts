import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSpoiler'
})
export class TextSpoilerPipe implements PipeTransform {

  transform(str: string): string {
    const res = [];
    for (const char of str){
      res.push(char);
      res.push('!');
    }
    return res.join('');
  }

}
