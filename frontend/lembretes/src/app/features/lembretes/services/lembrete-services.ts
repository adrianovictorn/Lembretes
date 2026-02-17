import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LembreteCreateDto } from '../models/lembrete-create.dto';

@Injectable({
  providedIn: 'root',
})
export class LembreteService {
  private http = inject(HttpClient)

  criarLembrete(payload:LembreteCreateDto){
    return this.http.post(`http://localhost:8080/api/lembrete/cadastrar`, payload)
  }

  listarLembretes(){
    return this.http.get(`http://localhost:8080/api/lembrete/listar`)
  }
}
