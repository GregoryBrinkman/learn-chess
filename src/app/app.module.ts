import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PiecesComponent } from './pieces/pieces.component';
import { SqauresComponent } from './sqaures/sqaures.component';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    SqauresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
