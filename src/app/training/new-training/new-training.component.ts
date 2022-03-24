import { Component, OnInit } from '@angular/core';

interface Workouts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  workouts: Workouts[] = [
    { value: 'crunches', viewValue: 'Crunches' },
    { value: 'pull-ups', viewValue: 'Pull Ups' },
    { value: 'lunges', viewValue: 'Lunges' },
    { value: 'squats', viewValue: 'Squats' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
