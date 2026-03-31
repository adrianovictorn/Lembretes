import { inject, Injectable, signal } from '@angular/core';
import { GameProfileServices } from './game-profile-services';
import { GameProfileViewDTO } from '../models/game-profile-view-dto';

@Injectable({
  providedIn: 'root',
})
export class GameProfileFacade {
  private service = inject(GameProfileServices)
  
  private readonly _gameProfile = signal<GameProfileViewDTO| null>(null)
  
  readonly gameProfile = this._gameProfile.asReadonly()

  carregar(){
    this.service.buscarGameProfile().subscribe({
      next: (response: GameProfileViewDTO) => {
        this._gameProfile.set(response)
      }
    })
  }
}
