import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  squares = [];
  bool = true;
  selectedSquare; // {rank: [CHARACTER], file: [NUMBER]}
  gameType; // ['Pawn', 'Rook', Knight', 'Bishop', 'King', 'Queen', 'Target']
  pieces = [];
  /*
  * [{rank: [CHARACTER],
  *   file: [NUMBER],
  *   color: ['Light', 'Dark']
  *   type: ['Pawn', 'Rook', Knight', 'Bishop', 'King', 'Queen', 'Target']}
  * , ...]
  */

  getImage(piece) {
    switch(piece.type) {
      case 'Pawn':
        if(piece.color === 'Light') {
          return 'assets/Chess_plt45.svg';
        } else {
          return 'assets/Chess_pdt45.svg';
        }
      case 'Rook':
        if(piece.color === 'Light') {
          return 'assets/Chess_rlt45.svg';
        } else {
          return 'assets/Chess_rdt45.svg';
        }
      case 'Bishop':
        if(piece.color === 'Light') {
          return 'assets/Chess_blt45.svg';
        } else {
          return 'assets/Chess_bdt45.svg';
        }
      case 'Knight':
        if(piece.color === 'Light') {
          return 'assets/Chess_nlt45.svg';
        } else {
          return 'assets/Chess_ndt45.svg';
        }
      case 'King':
        if(piece.color === 'Light') {
          return 'assets/Chess_klt45.svg';
        } else {
          return 'assets/Chess_kdt45.svg';
        }
      case 'Queen':
        if(piece.color === 'Light') {
          return 'assets/Chess_qlt45.svg';
        } else {
          return 'assets/Chess_qdt45.svg';
        }
      case 'Target':
      default:
        return 'assets/Full_Star_Yellow.svg';
    }
  }

  generateGame() {
    let ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let colors = ['Light', 'Dark'];
    let types = ['Pawn', 'Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Target'];

    for(let i = 0; i < ranks.length; i++) {
      let piece = {
        rank: ranks[i],
        file: i+1,
        color: colors[i % colors.length],
        type: types[i % types.length]
      };
      this.pieces.push(piece);
    }
  }

  updateBoard() {
    let oldPieces = this.el.nativeElement.querySelectorAll('.piece');
    for(let i = 0; i < oldPieces.length; i++) {
      this.renderer.removeChild(oldPieces[i].parentNode, oldPieces[i]);
    }

    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    for(let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i];
      let squareStr = '.' + piece.rank + '_' + numbers[piece.file - 1];
      let htmlSquare = this.el.nativeElement.querySelector(squareStr);
      let img = this.renderer.createElement('img');
      this.renderer.setProperty(img, 'src', this.getImage(piece));
      this.renderer.addClass(img, 'piece');

      this.renderer.appendChild(htmlSquare, img);
    }
  }

  ngOnInit() {
    this.makeSquares();
    this.generateGame();
  }

  ngAfterViewInit() {
    this.updateBoard();
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
