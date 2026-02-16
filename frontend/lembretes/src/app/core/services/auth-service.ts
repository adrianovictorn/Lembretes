import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

interface LoginResponse {
  acess_token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly KEY = 'token'
  
  constructor (private http: HttpClient){}

  login(username: string, password: string ){
    return this.http.post<LoginResponse>('http://localhost:8080/api/auth/login', {username, password}).pipe(
      tap(res => localStorage.setItem(this.KEY, res.acess_token))
    )
  }

  getToken(): string | null {
    const token = localStorage.getItem('token')
    if(!token || token === 'undefined' || token === 'null') return null
    return token
  }

  logout(): void {
    return localStorage.removeItem(this.KEY)
  }
  
}
