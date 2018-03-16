import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  date:number;

  makeDate() {
    this.date = (new Date).getFullYear();
  }

  ngOnInit() {
    this.makeDate();
  }

}
