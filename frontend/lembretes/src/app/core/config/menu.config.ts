import { BookText, CirclePlus, List, LucideIconData, PlusIcon } from "lucide-angular";

export type Role = 'ROLE_ADMIN'| 'ROLE_USER';



export interface MenuItem {
    label: string
    path: string
    children: MenuItem[]
    icon: LucideIconData
    role: Role[]
    
}

export const MENU_ITEMS: MenuItem[] = [
    {
        label: 'Lembrete', 
        path: '/lembretes', 
        children: [
            {
                label: 'Novo',
                path: '/lembrete/novo',
                role: ['ROLE_USER', 'ROLE_ADMIN'],
                icon: CirclePlus,
                children: []
            },
            {
                label: 'Listar',
                path: '/lembrete',
                role: ['ROLE_ADMIN', 'ROLE_USER'],
                icon: List,
                children: []
            }
        ],
        icon: BookText,
        role: ['ROLE_ADMIN', 'ROLE_USER']}
]

