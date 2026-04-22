import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AnimationService } from '../../../../core/services/animation-service';
import gsap from 'gsap';


@Component({
  selector: 'app-input-load',
  imports: [],
  templateUrl: './input-load.html',
  styleUrl: './input-load.css',
})
export class InputLoad implements AfterViewInit, OnDestroy {
  @ViewChild('spinner', {static:false}) spinner!: ElementRef<HTMLDivElement>
  @ViewChild('phrase', {static: false}) phrase!: ElementRef<HTMLParagraphElement>
  @ViewChild('reverse_spinner', {static:false}) reverse_spinner!: ElementRef<HTMLDivElement>
 

  private loadPharases = 
  [
   "Definindo sua missão", 
   "Personalizando seu progresso",
   "Criando sua jornada",
   "Missão Criada !"
  ];


  constructor(private animation: AnimationService) {}
  
  playPhraseLoop(){
    
    this.loadPharases.forEach((frase) => { 
      this.fluxo
      .call(() => { this.phrase.nativeElement.textContent = frase; })
      .fromTo(this.phrase.nativeElement, {opacity: 0, y:10}, {opacity: 1, duration: 1.5})
      .to({}, {duration: 1.2})
      .to(this.phrase.nativeElement, {opacity: 0, duration: 0.3})
    })
  }
  fluxo = gsap.timeline()
  
  ngAfterViewInit(): void {
    this.animation.load(this.spinner.nativeElement);
    this.animation.reverseLoad(this.reverse_spinner.nativeElement)
    this.playPhraseLoop()
  }
  
  ngOnDestroy(): void {
    this.fluxo.kill()
  }

 
}
