import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
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
    this.numbers.push(1);
    this.startNumber = 1;
    this.gameStart = setInterval(() => {
      this.startNumber = this.startNumber + 2;
      this.numbers.push(this.startNumber);
    }, 1000)
  }

  stopAndReset() {
    clearInterval(this.gameStart)
  }

}
