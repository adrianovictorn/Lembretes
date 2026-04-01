import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.dto';
import { AuthService } from '../../../core/services/auth-service';
import { HttpClient } from '@angular/common/http';
import { UserCreateDTO } from '../models/user-create.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  http = inject(HttpClient)


  auth = inject(AuthService)
  acessar(payload: LoginRequest){
    return this.auth.login(payload.username, payload.password);
  }


  cadastrar(payload: UserCreateDTO){
    return this.http.post('/api/user/cadastrar', payload)
  }


}
