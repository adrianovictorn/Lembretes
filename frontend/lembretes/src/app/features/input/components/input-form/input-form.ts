import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IaLembreteRequest } from '../../models/ia-lembrete-request';
import { InputServices } from '../../services/input-services';
import { Router } from '@angular/router';
import { InputLoad } from "../input-load/input-load";
import { AnimationService } from '../../../../core/services/animation-service';

@Component({
  selector: 'app-input-form',
  imports: [ReactiveFormsModule, InputLoad],
  templateUrl: './input-form.html',
  styleUrl: './input-form.css',
})
export class InputForm implements AfterViewInit  {
  @ViewChild('inputArea', {static: false}) inputArea!: ElementRef<HTMLTextAreaElement>
  @ViewChild('btnSend', {static: false}) btnSend!: ElementRef<HTMLButtonElement>

  form: FormGroup;
  isLoading: boolean = false

  constructor(
    private fb: FormBuilder, 
    private inputService: InputServices, 
    private route: Router, 
    private animation: AnimationService){
    this.form = this.criarForm()

  }

  ngAfterViewInit(){
    // Animar entrada dos elementos
    this.animation.fadeIn(this.inputArea.nativeElement);
    this.animation.fadeIn(this.btnSend.nativeElement);
  }
  

  criarForm(): FormGroup{
    return this.fb.group({
      text: ['',[Validators.required, Validators.maxLength(155), Validators.minLength(10)]]
    })
  }



  salvar(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return; 
    }
    this.isLoading = true
    let request: IaLembreteRequest
    request = this.form.getRawValue();
    this.inputService.criarComIa(request).subscribe({
      next: (res) => {
        alert(`Sucesso ao enviar requisição: ${res}`)
        this.route.navigate(['input'])
        this.isLoading = false
        this.form.reset()
      },
      error: (error) => {
        throw Error(`Erro ao realizar requisição: ${error}`)
        this.isLoading = false
        this.form.reset()
      }
    })
  }


}
