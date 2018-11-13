import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCharToSpace'
})
export class ConvertCharToSpacePipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
