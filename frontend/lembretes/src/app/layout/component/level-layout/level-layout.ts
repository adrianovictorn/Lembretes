import { Component, computed, inject, signal } from '@angular/core';
import { LevelFacade } from '../../../features/level/services/level-facade';
import { GameProfileFacade } from '../../../features/game-profile/services/game-profile.facade';

@Component({
  selector: 'app-level-layout',
  imports: [],
  templateUrl: './level-layout.html',
  styleUrl: './level-layout.css',
})
export class LevelLayout {
  
  levels = inject(LevelFacade)
  game = inject(GameProfileFacade)

  constructor(){
    this.levels.carregarLevel()
    this.game.carregar()
  }
  
  level = this.levels.levels
  profile = this.game.gameProfile
  
  proximoLevel = computed(() => {
    const levels = this.level()
    const profile = this.profile()

    if(levels === null || profile === null){
      return
    }
    const index = levels.findIndex(lvl => lvl.titulo === profile?.level.titulo )
    return levels[index + 1]
  })

 

  barra = computed(() => {

    let xpNecessario = this.proximoLevel()?.xpMinimo ?? 0
    let xpAtual = this.profile()?.xp ?? 0
    let porcentagem = Math.min(xpAtual/xpNecessario * 100, 100)

    console.log(xpAtual)
    console.log(xpNecessario)

    return porcentagem
  })

  visualizar(){
    console.log(this.barra())
    console.log()
  }
 
}
