import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LevelViewDTO } from '../models/level-view.dto';
import { LevelListDTO } from '../models/level-list.dto';

@Injectable({
  providedIn: 'root',
})
export class LevelServices {

  http = inject(HttpClient)


  carregarLevel(){
    return this.http.get<LevelListDTO[]>('/api/level/listar')
  }
  
  
}
