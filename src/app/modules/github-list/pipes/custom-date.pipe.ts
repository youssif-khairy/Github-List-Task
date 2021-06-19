import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): string {

    let today = new Date();

    let days = moment(today).diff( moment(value) ,'days')
    return days + ' days ago';
  }

}
