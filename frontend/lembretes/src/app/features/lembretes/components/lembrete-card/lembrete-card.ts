import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LembreteViewDtos } from '../../models/lembrete-view.dto';

@Component({
  selector: 'app-lembrete-card',
  standalone: true,
  imports: [],
  templateUrl: './lembrete-card.html',
  styleUrl: './lembrete-card.css',
})
export class LembreteCard {
  @Input({ required: true}) item!: LembreteViewDtos
  @Output() excluir = new EventEmitter<LembreteViewDtos>();

  onExcluir(){
    
  }
}
