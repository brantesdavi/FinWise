import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMonth'
})
export class DateMonthPipe implements PipeTransform {

  transform(value: number): string {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return monthNames[value];
  }
}
