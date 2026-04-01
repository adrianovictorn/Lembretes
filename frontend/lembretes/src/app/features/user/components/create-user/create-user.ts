import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login-services';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUserPage {
  loginService = inject(LoginService) 

  form: FormGroup

  constructor(private fb: FormBuilder){
    this.form = this.criarForm()
  }

  criarForm(): FormGroup{
    return this.fb.group({
      nome: ['', Validators.minLength(8)],
      username: ['', Validators.min(8)],
      senha: ['', Validators.minLength(5)],
      confirmarSenha: ['', Validators.minLength(5)],
      telefone: ['', Validators.minLength(11)],
      role: ['ROLE_USER']
    })
  }

  verificarSenha():boolean{
    return this.form.get('senha')?.value === this.form.get('confirmarSenha')?.value
  }

  cadastrar(){
    const { confirmarSenha, ...payload } = this.form.getRawValue()
    this.loginService.cadastrar(payload).subscribe({
      next: (res) => {
        console.log("Usuário cadastrado com sucesso: ", res)
      },
      error: (err) => console.log("Erro ao cadastrar usuário: ", err)
    })
  }

}
