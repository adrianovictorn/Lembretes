import { Component, computed, EventEmitter, inject, NgModule, Output } from '@angular/core';
import { Coins, icons, LucideAngularModule, Menu  } from "lucide-angular";
import { LevelLayout } from "../level-layout/level-layout";
import { GameProfileFacade } from '../../../features/game-profile/services/game-profile.facade';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [LucideAngularModule, LevelLayout],
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.css',
})
export class HeaderLayout {
  gameProfileF = inject(GameProfileFacade)
  readonly icons = { Menu, Coins}
  @Output() toggleMenu = new EventEmitter<void>()

  constructor(){
    this.gameProfileF.carregar()
  }

  profile = this.gameProfileF.gameProfile

  readonly username = computed(() => this.profile()?.user.username ?? '')
  readonly coins = computed(() => this.profile()?.moedas ?? 0 )
  visualizar(){
    console.log(this.profile()?.user.username)
  }


}
