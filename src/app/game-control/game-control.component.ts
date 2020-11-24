import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  goNow: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.goNow = true;
  }

  onStopGame() {
    this.goNow = false;
  }

}
