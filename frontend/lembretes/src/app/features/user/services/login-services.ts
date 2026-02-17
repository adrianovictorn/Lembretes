import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.dto';
import { AuthService } from '../../../core/services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {


  auth = inject(AuthService)
  acessar(payload: LoginRequest){
    return this.auth.login(payload.username, payload.password);
  }
}
