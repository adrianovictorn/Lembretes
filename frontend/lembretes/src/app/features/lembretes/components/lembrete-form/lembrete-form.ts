import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LembreteCreateDto } from '../../models/lembrete-create.dto';
import { LembreteService } from '../../services/lembrete-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lembrete-form',
  imports: [ReactiveFormsModule],
  templateUrl: './lembrete-form.html',
  styleUrl: './lembrete-form.css',
})
export class LembreteForm {

  form: FormGroup;

  constructor (private fb: FormBuilder, private lembreteService: LembreteService, private router: Router){
    this.form = this.criarForm()
  }

  criarForm() : FormGroup {
    return this.fb.group({

      titulo: ['', [Validators.required, Validators.minLength(3)]],
      mensagem: ['', [Validators.required, Validators.minLength(3)]]

    })
  }

  salvar(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    let lembrete: LembreteCreateDto 
    lembrete = this.form.getRawValue()
    this.lembreteService.criarLembrete(lembrete).subscribe({
      next: (res) => {
        alert('Lembrete criado com sucesso !')
        console.log(res)
        this.router.navigate([''])
      },
      error: (err) => console.log(`Erro ao enviar requisição: ${err}`)
    })
    
  }
  
}
