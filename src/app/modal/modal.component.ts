import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  clickPawn() { console.log("Pawn");}
  clickKing() { console.log("King");}
  clickQueen() { console.log("Queen");}
  clickRook() { console.log("Rook");}
  clickBishop() { console.log("Bishop");}
  clickKnight() { console.log("Knight");}

  ngOnInit() {
  }

}
