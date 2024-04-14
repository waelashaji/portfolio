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
  
schedule = [
  {
    name:'Compuvision',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
  {
    name:'Dubai Technology Partners',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
  {
    name:'Interphase',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
]
}
