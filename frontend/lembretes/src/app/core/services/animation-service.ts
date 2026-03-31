import { Injectable } from '@angular/core';
import gsap from 'gsap';


@Injectable({
  providedIn: 'root',
})
export class AnimationService {

  fadeIn(element: HTMLElement){
    return gsap.from(element, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power4.on'
    })
  }


  load(element: HTMLElement){
    return gsap.fromTo(element,
      {duration: 5, opacity: 1, ease: 'power2.out', rotate:360},
      {duration: 10, opacity: 1, ease:'power2.out', rotate:0}
    )
  }
  
}
