import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { MiniGamesComponent } from './mini-games.component';


@NgModule({
  declarations: [
    MiniGamesComponent
  ],
  imports: [
    CommonModule,
    MiniGamesRoutingModule
  ]
})
export class MiniGamesModule { }
