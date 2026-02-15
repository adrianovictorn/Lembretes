import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lembrete-card',
  imports: [],
  templateUrl: './lembrete-card.html',
  styleUrl: './lembrete-card.css',
})
export class LembreteCard {
  @Input() item!: {titulo: string; descricao: string}
  @Output() excluir = new EventEmitter<void>();
}
