import { PipeTransform, Pipe } from '@angular/core';
import truncate from 'lodash/truncate';

@Pipe({ name: 'truncatePipe' })

export class TruncatePipe implements PipeTransform {
 transform(value: string, truncateLength: number): string {
    if (!value) {
      throw new Error('truncatePipe value should be a string');
    }
    return truncate(value, {length: truncateLength});
  }
}
