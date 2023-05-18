import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-company',
  templateUrl: './time-company.component.html',
  styleUrls: ['./time-company.component.css']
})
export class TimeCompanyComponent implements OnInit {

  deadlineDate = '2023-10-04T23:59:59';
  months: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  ngOnInit() {
    setInterval(() => {
      const countdown = this.countdown(this.deadlineDate);
      this.months = countdown.months;
      this.days = countdown.days;
      this.hours = countdown.hours;
      this.minutes = countdown.minutes;
      this.seconds = countdown.seconds;
    }, 1000);
  }

  countdown(deadlineDate: string) {
    const deadline = new Date(deadlineDate);
    const currentDate = new Date();

    const totalSeconds = (deadline.getTime() - currentDate.getTime()) / 1000;

    const months = Math.floor(totalSeconds / (3600 * 24 * 30));
    const days = Math.floor((totalSeconds % (3600 * 24 * 30)) / 3600 / 24);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      months,
      days,
      hours,
      minutes,
      seconds
    };
  }

}
