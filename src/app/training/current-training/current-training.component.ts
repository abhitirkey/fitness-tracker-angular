import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progressValue: number = 0;
  timer: any;
  timerStopped?: boolean;

  @Output() onQuitTraining: EventEmitter<void> = new EventEmitter();

  constructor(private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.timerStopped = false;
    this.timer = setInterval(() => {
      this.progressValue += 25;
      if(this.progressValue === 100) {
        clearInterval(this.timer);
        this.timerStopped = true;
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.timer);
    this.timerStopped = true;
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progressValue: this.progressValue
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.onQuitTraining.emit();
      }
      else {
        this.startTimer();
      }
    });
  }

}
