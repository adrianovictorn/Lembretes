import { Injectable } from '@angular/core';

export interface LembreteModel {
  titulo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root',
})
export class LembreteService {
  
  private lembretes: LembreteModel[] = [
    { titulo:'Beba água 2l', descricao:'Beber bastante água ao longo do dia' },
    { titulo: 'Faça exercícios', descricao:'Faça exercicios todos os dias'}
  ];

  listar(): LembreteModel[] {
    return this.lembretes
  }

  adicionar(lembrete: LembreteModel): void {
    this.lembretes.unshift(lembrete)
  }

  removerPorTitulo(titulo: string): void {
    this.lembretes = this.lembretes.filter(l => l.titulo !== titulo)
  }
}
