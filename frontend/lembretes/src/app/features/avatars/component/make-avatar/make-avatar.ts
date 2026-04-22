import { Component, computed, inject, input, signal } from '@angular/core';
import { createAvatar } from '@dicebear/core';
import { adventurer} from '@dicebear/collection';
import { AvatarConfig, eyebrows, EYEBROWS_OPTIONS, eyes, EYES_OPTIONS, hair, HAIR_OPTIONS, mouth, MOUTH_OPTIONS } from '../../models/avatar.model';


@Component({
  selector: 'app-make-avatar',
  imports: [],
  templateUrl: './make-avatar.html',
  styleUrl: './make-avatar.css',
})
export class MakeAvatar {

  constructor(){
    
  }

  isHairSectionOpen = signal<boolean>(false)
  isEyesSectionOpen = signal<boolean>(false)
  isEyeBrowsSectionOpen = signal<boolean>(false)
  isMouthSectionOpen = signal<boolean>(false)


  hairOptions = HAIR_OPTIONS
  eyesOptions = EYES_OPTIONS
  eyeBrowsOptions = EYEBROWS_OPTIONS
  mouthOptions = MOUTH_OPTIONS
  hairColorOption: string[] = []
  skinColorOption: string[] = [
    'FBEDE0', 
    'F6D7C3',
    'F1C4A8',
    'E8AF8C',
    'D99A6C',
    'C68642',
    'A56B3F',
    '8D5524',
    '6B4226',
    '4B2E2B',
  ]


  avatarConfig = signal<AvatarConfig>(
    {
      hair: 'short04',
      hairColor: 'ac6511',
      skinColor: 'f2d3b1',
      eyes: 'variant01',
      eyebrows: 'variant01',
      mouth: 'variant01'

    }
    
  )

  previewAvatar(key: keyof AvatarConfig,  value: string){
    if(key === 'eyes'){
      if(this.isEyesOption(value))
      return createAvatar(adventurer, {
        seed: 'preview',
        size: 110,
        eyes: [value],
        hair: [],
        skinColor: ['FFFFFF'],
        mouth: [],
        eyebrows: [],
        backgroundColor: ['FFFF'],
        base: [],
        earrings: []
      }).toDataUri()
    }

    if(key === 'hair'){
       if(this.isHairOption(value))
      return createAvatar(adventurer, {
        seed: 'preview',
        size: 200,
        eyes: [],
        hair: [value],
        hairColor: [this.avatarConfig().hairColor],
        skinColor: ['FFFF'],
        mouth: [],
        eyebrows: [],
        backgroundColor: ['FFFF'],
        base: [],
        
        earrings: []
      }).toDataUri()
    }

    if(key === 'mouth'){
       if(this.isMouthOption(value))
      return createAvatar(adventurer, {
        seed: 'preview',
        size: 110,
        eyes: [],
        hair: [],
        hairColor: ['#000000'],
        skinColor: ['FFFF'],
        mouth: [value],
        eyebrows: [],
        backgroundColor: ['FFFF'],
        base: [],
        earrings: []
      }).toDataUri()
    }

    if(key === 'eyebrows'){
       if(this.isEyeBrowsOption(value))
      return createAvatar(adventurer, {
        seed: 'preview',
        size: 110,
        eyes: [],
        hair: [],
        hairColor: ['#000000'],
        skinColor: ['FFFF'],
        mouth: [],
        eyebrows: [value],
        backgroundColor: ['FFFF'],
        base: [],
        earrings: []
      }).toDataUri()
    }

    if(key === 'hairColor'){
      return createAvatar(adventurer, {
        seed: 'preview',
        size: 110,
        hairColor: [value],
      }).toDataUri()
    }

    if(key === 'skinColor'){
      return createAvatar(adventurer, {
        seed: 'preview',
        skinColor: [value],
      }).toDataUri()
    }


    return
  }

  avatarURL = computed(() => createAvatar(adventurer, { 
    seed: 'custom',
    size: 350,
    hair: [this.avatarConfig().hair],
    hairColor: [this.avatarConfig().hairColor],
    skinColor: [this.avatarConfig().skinColor],
    eyes: [this.avatarConfig().eyes],
    eyebrows: [this.avatarConfig().eyebrows],
    mouth: [this.avatarConfig().mouth]
    
  }).toDataUri())
  

  updateConfig(key: keyof AvatarConfig, value: string){
    if(key === 'hairColor'){
      value = value.replace('#', '')
    }

    if(key === 'skinColor'){
      value = value.replace('#', '')
    }
    this.avatarConfig.update(config =>  ({ ...config, [key]:  value}));

  }

  isEyesOption(value: string): value is eyes{
    return EYES_OPTIONS.includes(value as eyes)
  }

  isHairOption(value: string): value is hair{
    return HAIR_OPTIONS.includes(value as hair)
  }

  isMouthOption(value:string): value is mouth{
    return MOUTH_OPTIONS.includes(value as mouth)
  }

  isEyeBrowsOption(value: string): value is eyebrows{
    return EYEBROWS_OPTIONS.includes(value as eyebrows)
  }


  openCloseSection(section: string){
    if(section === 'hair'){
      this.isHairSectionOpen.set(!this.isHairSectionOpen())
      this.isEyesSectionOpen.set(false)
      this.isEyeBrowsSectionOpen.set(false)
      this.isMouthSectionOpen.set(false)
    }
    if(section === 'eyes'){
      this.isHairSectionOpen.set(false)
      this.isEyesSectionOpen.set(!this.isEyesSectionOpen())
      this.isEyeBrowsSectionOpen.set(false)
      this.isMouthSectionOpen.set(false)
    }
    if(section === 'eyebrows'){
      this.isHairSectionOpen.set(false)
      this.isEyesSectionOpen.set(false)
      this.isEyeBrowsSectionOpen.set(!this.isEyeBrowsSectionOpen())
      this.isMouthSectionOpen.set(false)
    }
    if(section === 'mouth'){
      this.isHairSectionOpen.set(false)
      this.isEyesSectionOpen.set(false)
      this.isEyeBrowsSectionOpen.set(false)
      this.isMouthSectionOpen.set(!this.isMouthSectionOpen())
    }
    
  }


  
}
