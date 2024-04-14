import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-schedule',
  templateUrl: './resume-schedule.component.html',
  styleUrls: ['./resume-schedule.component.scss']
})
export class ResumeScheduleComponent implements OnInit {

  day = "";
  month = "";
  year = "";

  constructor() { }

  ngOnInit() {
      // Create a new Date object
      var date = new Date();
      // Get the day (1-31)
      var day = date.getDate();
      this.day = day.toString();
      // Get the month (0-11)
      var month = date.getMonth() + 1; // Adding 1 because months are zero-indexed
      // Get the year (4 digits)
      this.year = date.getFullYear().toString();
      // Format the month and day with leading zeros if necessary
      if (month < 10) {
        this.month = '0' + month;
      }
      if (day < 10) {
        this.day = '0' + day;
      }
  }
}
