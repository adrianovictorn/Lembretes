import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationService } from '../../../../core/services/animation-service';

@Component({
  selector: 'app-input-load',
  imports: [],
  templateUrl: './input-load.html',
  styleUrl: './input-load.css',
})
export class InputLoad implements AfterViewInit{
  @ViewChild('container', {static:false}) container!: ElementRef<HTMLDivElement>

  constructor(private animation: AnimationService){}
  
  ngAfterViewInit(): void {
    this.animation.load(this.container.nativeElement)
  }

}
