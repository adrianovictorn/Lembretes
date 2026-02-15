import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LembreteService } from '../../service/lembrete';

@Component({
  selector: 'app-lembrete-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './lembrete-form.html',
  styleUrl: './lembrete-form.css',
})
export class LembreteForm {
  form!: FormGroup;
  
   
  constructor(private fb: FormBuilder, private router: Router, private service: LembreteService){
    this.form = this.criarForm();
  }

  criarForm(): FormGroup {
   return this.fb.group({
     titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(3)]]
   })
  }

  salvar(){

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const {titulo, descricao} = this.form.value

    this.service.adicionar({
      titulo: titulo!,
      descricao: descricao!
    })

    this.router.navigate(['/lembretes'])

  }
}
