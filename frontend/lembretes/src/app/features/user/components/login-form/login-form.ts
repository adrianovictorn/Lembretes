import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.dto';
import { AuthService } from '../../../../core/services/auth-service';
import { LoginService } from '../../services/login-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})

export class LoginForm {
  form: FormGroup


  constructor(private fb: FormBuilder, private login: LoginService, private router: Router){
    this.form = this.criarForm()
  }

  criarForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  logar(){

    let user: LoginRequest
    user = this.form.getRawValue()
    this.login.acessar(user).subscribe({
      next: (res) => {
        console.log("Acesso concedido: ", res)
        this.router.navigate(['lembretes'])
      },
      error: (err) => console.log("Erro ao estabelecer conexão: ", err)
    })
  }
}
