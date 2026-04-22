export interface AvatarConfig{
    hair: hair
    hairColor: string
    skinColor: string
    eyes: eyes
    eyebrows: eyebrows
    mouth: mouth
}

export const HAIR_OPTIONS = [
    'short16', 
    'short15', 
    'short14', 
    'short13',
    'short12', 
    'short11', 
    'short10', 
    'short09', 
    'short08', 
    'short07',
    'short06', 
    'short05', 
    'short04',
    'short03',
    'long20',
    'short02',
    'short01',
    'long19',
    'long18',
    'long17',
    'long16', 
    'long15',
    'long14', 
    'long13',
    'long12',
    'long11',
    'long10',
    'long09',
    'long08',
    'long07',
    'long06',
    'long05',
    'long04',
    'long03',
    'long02',
    'long01',
    'short19',
    'long26',
    'long25',
    'short18',
    'long24',
    'long23', 
    'long22',
    'short17',
    'long21'] as const

export const EYES_OPTIONS = [
    'variant26', 'variant25', 'variant24', 'variant23', 'variant22', 'variant21', 'variant20', 'variant19', 'variant18', 'variant17', 'variant16', 'variant15', 'variant14', 'variant13','variant12', 'variant11', 'variant10', 'variant09', 'variant08', 'variant07', 'variant06', 'variant05', 'variant04', 'variant03' , 'variant02', 'variant01'
] as const
export const EYEBROWS_OPTIONS = [
    'variant10', 'variant09', 'variant08', 'variant07', 'variant06','variant05', 'variant04', 'variant03','variant02','variant01', 'variant15', 'variant14','variant13', 'variant12', 'variant11'
] as const

export const MOUTH_OPTIONS = [
    'variant30', 'variant29', 'variant28', 'variant27', 'variant26', 'variant25', 'variant24', 'variant23', 'variant22', 'variant21', 'variant20', 'variant19', 'variant18', 'variant17', 'variant16', 'variant15', 'variant14', 'variant13', 'variant12', 'variant11', 'variant10', 'variant09', 'variant08', 'variant07', 'variant06', 'variant05', 'variant04', 'variant03', 'variant02', 'variant01'
] as const

export type hair = typeof HAIR_OPTIONS[number] 
export type eyes = typeof EYES_OPTIONS[number]
export type eyebrows = typeof EYEBROWS_OPTIONS[number]
export type mouth = typeof MOUTH_OPTIONS[number]