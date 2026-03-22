import { inject, Injectable, signal } from '@angular/core';
import { LevelServices } from './level-services';
import { LevelViewDTO } from '../models/level-view.dto';
import { LevelView } from '../components/level-view/level-view';
import { LevelListDTO } from '../models/level-list.dto';

@Injectable({
  providedIn: 'root',
})
export class LevelFacade {
  private service = inject(LevelServices)

  private readonly _levels = signal<LevelListDTO[]>([])

  readonly levels = this._levels.asReadonly()
  
  carregarLevel(){
    this.service.carregarLevel().subscribe({
      next: (response: LevelListDTO[]) => {
        this._levels.set(response)
      }
    })
  }
}
