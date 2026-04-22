import { eyebrows, eyes, hair, mouth } from "./avatar.model";

export interface AvatarViewDTO{ 
    hair: hair
    eyes: eyes
    eyebrows: eyebrows
    mouth: mouth
    hairColor: string
    skinColor: string
}