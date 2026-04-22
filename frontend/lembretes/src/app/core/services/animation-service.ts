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
      ease: 'power4.out'
    })
  }


  load(element: HTMLElement){
    return gsap.to(element,
      {duration: 3, rotate:360, repeat: -1, yoyo: true, ease: 'none'}
    )
  }

  reverseLoad(element: HTMLElement){
    return gsap.to(element, {duration: 3, rotate: -360, repeat: -1, yoyo: true, ease: 'none'} )
  }
  
}
