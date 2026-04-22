import { Component, computed, inject } from '@angular/core';
import { GameProfileLevel } from "../game-profile-level/game-profile-level";
import { GameProfileCoins } from "../game-profile-coins/game-profile-coins";
import { GameProfileServices } from '../../services/game-profile-services';
import { toSignal } from '@angular/core/rxjs-interop';
import { LevelFacade } from '../../../level/services/level-facade';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import { GameProfileFacade } from '../../services/game-profile.facade';

@Component({
  selector: 'app-game-profile-view',
  imports: [GameProfileLevel, GameProfileCoins],
  templateUrl: './game-profile-view.html',
  styleUrl: './game-profile-view.css',
})
export class GameProfileView {
  
  private service = inject(GameProfileServices)
  private levelFacade = inject(LevelFacade)
  private gameFacade = inject(GameProfileFacade)
  
  constructor(){
    this.levelFacade.carregarLevel();
    this.gameFacade.carregar();
  }
  
  //GAMEPROFILE
  readonly profile = toSignal(this.service.buscarGameProfile(), {initialValue: null})
  readonly nome = computed(() => this.profile()?.user.nome ?? '')
  readonly moedas = computed(() => this.profile()?.moedas ?? '')
  readonly tituloLevelGameProfile = computed(() => this.profile()?.level.titulo)
  readonly role = computed(() => this.profile()?.user.role ?? '')
  readonly xpObtido = computed(() => this.profile()?.xp ?? 0)
  readonly xpMinimoProfile = computed(() => this.profile()?.level.xpMinimo ?? 0);

  //LEVEL
  readonly level = this.levelFacade.levels

  //AVATAR
  readonly avatar = this.gameFacade.gameProfile


  readonly proximoLevel = computed(() => { 
    const levels = this.level()
    const indexAtual = levels.findIndex(lvl => lvl.titulo === this.tituloLevelGameProfile())
    
    if(indexAtual === -1) return null

    return levels[indexAtual + 1 ] ?? null

  })

  readonly xpNecessario = computed(()=> {
    return  this.proximoLevel()?.xpMinimo 
  })

  readonly barraProgresso = computed(() => {
    const xpAtual = this.xpObtido();
    const proximo = this.proximoLevel();
    const xpMinimo = this.xpMinimoProfile();

    if(!proximo) return 100;

    const intervalo = proximo.xpMinimo - xpMinimo;
    const progressoAtual = xpAtual - xpMinimo;

    if(intervalo <= 0) return 0

    return Math.max(0, Math.min(100, (progressoAtual/ intervalo) * 100))
  })

  



  avatarShow = computed(()=> createAvatar(adventurer, {
    seed: 'custom',
    size: 258,
    hair: [this.avatar()?.avatar.hair ?? 'short01'],
    eyes: [this.avatar()?.avatar.eyes ?? 'variant02'],
    eyebrows: [this.avatar()?.avatar.eyebrows ?? 'variant12'],
    mouth: [this.avatar()?.avatar.mouth ?? 'variant28'],
    hairColor: [this.avatar()?.avatar.hairColor ?? '000000']
  }).toDataUri()
  )
  
  
}