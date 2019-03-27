import { Injectable, Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
})

@Injectable()
export class CapitalizePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, onlyFirstWord: boolean) {

    /* Separa por palavras */
    let words: string[] = value.split(' ');
    let output: string = ''
    console.log(words);

    if (onlyFirstWord == false ){

      words.forEach( ( value: string, index: Number, words: string[]) => {
          output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';

      });
    }else{
      return value.charAt(0).toUpperCase() + value.substr(1) + ' ';
      //words[0].charAt(0).toUpperCase()
    }
    return output;
  }

}
