import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (!value || value == 'NaN') return '0';
      if (value == 'Infinity') return '&#x221e;';
      value = value.toString().replace(/\$|\,/g, '');
      if (isNaN(value))
          value = "0";
      let sign = (value == (value = Math.abs(value)));
      value = Math.floor(value * 100 + 0.50000000001);
      //cents = value % 100;
      value = Math.floor(value / 100).toString();
      //if (cents < 10)
      //    cents = "0" + cents;
      for (var i = 0; i < Math.floor((value.length - (1 + i)) / 3) ; i++)
          value = value.substring(0, value.length - (4 * i + 3)) + '.' + value.substring(value.length - (4 * i + 3));
      return (((sign) ? '' : '-') + value );
  }

}
