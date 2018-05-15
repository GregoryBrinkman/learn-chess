import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { BoardComponent } from './board/board.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'board', component: BoardComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
