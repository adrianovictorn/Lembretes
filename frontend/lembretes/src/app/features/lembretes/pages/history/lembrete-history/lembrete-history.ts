import { Component, inject } from '@angular/core';
import { LembreteCard } from '../../../components/lembrete-card/lembrete-card';
import { LembreteService } from '../../../services/lembrete-services';
import { LembreteFacade } from '../../../services/lembrete.facade';

@Component({
  selector: 'app-lembrete-history',
  imports: [LembreteCard],
  templateUrl: './lembrete-history.html',
  styleUrl: './lembrete-history.css',
})
export class LembreteHistory  {

  facade = inject(LembreteFacade)

  vm = this.facade.vm
  
  ngOnInit(){
    this.facade.carregarConcluidos()
  }


  


  
}
