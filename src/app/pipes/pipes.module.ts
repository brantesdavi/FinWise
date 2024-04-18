import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateMonthPipe } from './date-month-pipe'; // Import your custom pipes

@NgModule({
    declarations: [
      DateMonthPipe // Add your custom pipes to declarations
    ],
    imports: [
      CommonModule // Import CommonModule for common directives and pipes
    ],
    exports: [
      DateMonthPipe // Export your custom pipes for use in other modules
    ]
  })
  export class PipesModule { }
  