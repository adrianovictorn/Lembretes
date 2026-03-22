import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-game-profile-level',
  imports: [],
  templateUrl: './game-profile-level.html',
  styleUrl: './game-profile-level.css',
})
export class GameProfileLevel {


  nivel = input<string>()
  xpNecessario = input<number>(0)
  xpAtual = input<number>(0)
  barra = input<number>(0)

  

}
