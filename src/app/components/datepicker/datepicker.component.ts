import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {

  @ViewChild('datepickerInput')
  datepickerInput!: HTMLInputElement; // Accessing the input element

  @Output() selectedDateChange = new EventEmitter<Date>();

  selectedDate: Date = new Date();
  currentMonth: number = this.selectedDate.getMonth();
  currentYear: number = this.selectedDate.getFullYear();
  daysInMonth: number[] = [];

  today: Date = new Date();
  isToday: boolean = true;


  datepickerHidden = true;

  constructor(private datePipe: DatePipe, private viewContainer: ViewContainerRef) { } // Injecting DatePipe for date formatting

  ngOnInit(): void {    
    this.updateCalendar();
  }

  datepickerToggle(){
    this.datepickerHidden = !this.datepickerHidden
  }

  previousMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateCalendar();
  }

  isTodayFunction(selectedDate: any): boolean{
    const todayNoHours = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    return moment(todayNoHours).isSame(selectedDate)
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateCalendar();
  }

  selectDay(day: number): void {
    const newDate = new Date(this.currentYear, this.currentMonth, day);
    this.selectedDate = newDate;
    this.updateInput();
    this.selectedDateChange.emit(this.selectedDate);
    this.isToday = this.isTodayFunction(newDate);
  }

  updateInput(): void {
    const formattedDate = this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy');
    const inputElement = this.viewContainer.element.nativeElement.querySelector('input[name="datepickerInput"]');
    if (inputElement) {
      inputElement.value = formattedDate;
    }
    this.datepickerToggle()
  } 

  updateCalendar(): void {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const numberOfDaysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = [];

    for (let day = 1; day <= numberOfDaysInMonth; day++) {
      this.daysInMonth.push(day);
    }
  }
  
}
