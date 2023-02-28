import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapTruncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value?: string): string | undefined {
    const characterCount = 28;
    const hasBigName = value && value.length >= characterCount;

    if (hasBigName) {
      return `${value.substring(0, 25)}...`
    }

    return value;
  }

}
