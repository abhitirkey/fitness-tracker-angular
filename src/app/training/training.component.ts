import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  newSession = false
  constructor() { }

  ngOnInit(): void {
  }

  startNewTraining(): void {
    this.newSession = true;
  }
}
