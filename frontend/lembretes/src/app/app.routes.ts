import { Routes } from '@angular/router';
import { LembreteFormPage } from './features/lembretes/pages/form/lembrete-form/lembrete-form-page';
import { LoginFormPages } from './features/user/pages/form/login-form/login-form-page';
import { LembreteListPage } from './features/lembretes/pages/list/lembrete-list-page/lembrete-list-page';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginFormPages},
    { path: 'lembretes', component: LembreteListPage },
    { path: 'lembrete/novo', component: LembreteFormPage }
   
];
