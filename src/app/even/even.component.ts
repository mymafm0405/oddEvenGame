import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() start: boolean;
  startNumber = 1;
  gameStart: any;
  numbers = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.start) {
      this.addOddNumber();
      console.log('started');
    } else {
      this.stopAndReset();
      console.log('stopped');
    }
  }

  addOddNumber() {
    this.numbers = [];
    this.numbers.push(2);
    this.startNumber = 2;
    this.gameStart = setInterval(() => {
      this.startNumber = this.startNumber + 2;
      this.numbers.push(this.startNumber);
    }, 1000)
  }

  stopAndReset() {
    clearInterval(this.gameStart)
  }

}
