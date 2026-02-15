import { Routes } from '@angular/router';
import { LembreteList } from './features/lembretes/pages/lembrete-list/lembrete-list';
import { LembreteForm } from './features/lembretes/pages/lembrete-form/lembrete-form';

export const routes: Routes = [
    { path: '', redirectTo: 'lembretes', pathMatch: 'full' },
    { path: 'lembretes', component: LembreteList },
    { path: 'lembretes/new', component: LembreteForm}
];
