import { Component } from '@angular/core';
import { LembreteService } from '../../services/lembrete-services';

@Component({
  selector: 'app-lembrete-list',
  imports: [],
  templateUrl: './lembrete-list.html',
  styleUrl: './lembrete-list.css',
})
export class LembreteList {

  constructor(private lembrete: LembreteService){}

  listar(){
    this.lembrete.listarLembretes().subscribe()
  }
}
