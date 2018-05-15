import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  squares = [];
  bool = true;

  ngOnInit() {
    this.makeSquares();
  }

  allowDrop(value) {
    console.log("ALLOW_DROP " + value);
  }

  drop(value, data) {
    console.log("DROP", value);
    console.log("DATA", data);
  }

  drag(value, data) {
    console.log("DRAG", value);
    console.log("DATA", data);
  }

  alternate() {
    this.bool = !this.bool;
    return !this.bool;
  }

  makeSquares() {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        this.squares.push(letters[i] + '_' + numbers[j]);
      }
    }
  }


}
