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
  selectedPiece;
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

  getPossibleMoves(piece) {
    switch(piece.type) {
      case 'Pawn':
      //return this.getPawnMoves(piece);
      case 'Rook':
      //return this.getRookMoves(piece);
      case 'Bishop':
      //return this.getBishopMoves(piece);
      case 'Knight':
      //return this.getKnightMoves(piece);
      case 'King':
      //return this.getKingMoves(piece);
      case 'Queen':
      //return this.getQueenMoves(piece);
      case 'Target':
      default:
      //return [];
      return this.testGrid();
    }
  }

  testGrid() {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let retArr = [];

    for(let i = 0; i < letters.length; i++) {
      for(let j = 1; j < 9; j++) {
        retArr.push({rank: letters[i], file: j});
      }
    }
    return retArr;
  }

  getPawnMoves(piece) {
    //uses color, rank, and file
    let retArr = [];
    return retArr;
  }

  getRookMoves(piece) {
    //uses rank and file
    let retArr = [];
    return retArr;
  }

  getBishopMoves(piece) {
    //uses rank and file
    let retArr = [];
    return retArr;
  }

  getKnightMoves(piece) {
    //uses rank and file
    let retArr = [];
    return retArr;
  }

  getKingMoves(piece) {
    //uses rank and file
    let retArr = [];
    return retArr;
  }

  getQueenMoves(piece) {
    //uses rank and file
    let retArr = [];
    return retArr;
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
  //remove old pieces
    let oldPieces = this.el.nativeElement.querySelectorAll('.piece');
    for(let i = 0; i < oldPieces.length; i++) {
      this.renderer.removeChild(oldPieces[i].parentNode, oldPieces[i]);
    }

  //make new ones
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    for(let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i];
      let squareStr = '.' + piece.rank + '_' + numbers[piece.file - 1];
      let htmlSquare = this.el.nativeElement.querySelector(squareStr);
      let img = this.renderer.createElement('img');
      this.renderer.setProperty(img, 'src', this.getImage(piece));
      this.renderer.setProperty(img, 'data', piece);
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

  click(clickedSquare) {
    //if there's a selectedPiece, then check if the square is an acceptable move,
    //if not and the square has data, that square is now the selected piece
    //if there's no data and no selectedPiece, ignore

    if(!!this.selectedPiece) {

      let square;
      if(!!clickedSquare.target.data) {
        square = clickedSquare.target.data;
      } else {
        let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
        let split = clickedSquare.target.className.split("_");
        for (let i = 0; i < numbers.length; i++) {
          if(split[1] === numbers[i]) {
            square = {rank: split[0], file: i+1};
          }
        }
      }

      if(!!square) {
        let possibleSquares = this.getPossibleMoves(this.selectedPiece);
        for (let i = 0; i < possibleSquares.length; i++) {
          if(possibleSquares[i].rank === square.rank && possibleSquares[i].file === square.file) {
            for(let j = 0; j < this.pieces.length; j++) {
              if(this.pieces[j].rank === square.rank && this.pieces[j].file === square.file) {
                this.pieces.splice(j, 1);
              }
            }

            for(let j = 0; j < this.pieces.length; j++) {
              if(this.pieces[j] === this.selectedPiece) {
                this.pieces[j].rank = square.rank;
                this.pieces[j].file = square.file;
              }
            }
            this.updateBoard();
            this.selectedPiece = null;
          }
        }
      }
    } else {
      if(!!clickedSquare.target.data) {
        if(clickedSquare.target.data.type === 'Target') {
          console.log(clickedSquare.target.data);
        } else {
          this.selectedPiece = clickedSquare.target.data;
        }
      }
    }
  }
}
