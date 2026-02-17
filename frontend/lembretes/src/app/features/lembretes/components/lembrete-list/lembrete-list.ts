import { Component, inject, OnInit } from '@angular/core';
import { LembreteService } from '../../services/lembrete-services';
import { LembreteViewDtos } from '../../models/lembrete-view.dto';
import { LembreteCard } from "../lembrete-card/lembrete-card";
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lembrete-list',
  standalone: true,
  imports: [AsyncPipe, LembreteCard],
  templateUrl: './lembrete-list.html',
  styleUrl: './lembrete-list.css',
})
export class LembreteList {

  private lembrete = inject(LembreteService)
  lembretes$: Observable<LembreteViewDtos[]> = this.lembrete.listarLembretes()

 
  
  
 

}
