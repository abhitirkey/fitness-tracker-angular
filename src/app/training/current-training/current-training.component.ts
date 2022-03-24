import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progressValue: number = 0;
  timer: any;
  timerStopped?: boolean;

  constructor() { 
    this.startTimer();
  }

  ngOnInit(): void {
  }

  startTimer(): void {
    this.timerStopped = false;
    this.timer = setInterval(() => {
      this.progressValue += 25;
      if(this.progressValue === 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.timer);
    this.timerStopped = true;
  }

}
