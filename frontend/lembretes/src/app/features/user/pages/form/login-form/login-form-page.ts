import { Component } from '@angular/core';
import { LembreteForm } from "../../../../lembretes/components/lembrete-form/lembrete-form";
import { LoginForm } from "../../../components/login-form/login-form";

@Component({
  selector: 'app-login-form-page',
  imports: [LoginForm],
  templateUrl: './login-form-page.html',
  styleUrl: './login-form-page.css',
})
export class LoginFormPages {

}
