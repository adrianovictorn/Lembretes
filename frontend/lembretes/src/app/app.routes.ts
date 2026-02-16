import { Routes } from '@angular/router';
import { LembreteFormPage } from './features/lembretes/pages/form/lembrete-form/lembrete-form-page';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'lembrete/novo', component: LembreteFormPage }
   
];
