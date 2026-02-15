import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LembreteCard } from '../../components/lembrete-card/lembrete-card';
import { LembreteModel, LembreteService } from '../../service/lembrete';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-lembrete-list',
  imports: [RouterLink, LembreteCard],
  templateUrl: './lembrete-list.html',
  styleUrl: './lembrete-list.css',
})
export class LembreteList {
  lembretes: LembreteModel[] = []
  
  
  constructor(private lembreteService: LembreteService){
  }

  ngOnInit(){
    this.lembretes = this.lembreteService.listar()
  }

  remover(titulo: string){
    this.lembreteService.removerPorTitulo(titulo)
    this.lembretes = this.lembreteService.listar()
  }
}
