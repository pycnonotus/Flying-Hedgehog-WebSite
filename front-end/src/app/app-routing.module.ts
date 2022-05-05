import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mini-games', loadChildren: () => import('./mini-games/mini-games.module').then(m => m.MiniGamesModule) },
  { path: '', loadChildren: () => import('./mini-games/mini-games.module').then(m => m.MiniGamesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
