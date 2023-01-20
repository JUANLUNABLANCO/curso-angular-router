import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap, tap } from 'rxjs/operators';

import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { addTokenHeader } from '../interceptors/add-token.interceptor';

// manejo del estado de usuario
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'https://young-sands-07814.herokuapp.com/api';
  private apiUrl = 'https://damp-spire-59848.herokuapp.com/api';

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
  login(email: string, password: string) {
    console.log('AuthService login: ', email, password);
    return this.http.post<Auth>(`${this.apiUrl}/auth/login`, {email, password})
    .pipe(
      tap((response) => {
        console.log('AuthService login: ', response);
        this.tokenService.saveToken(response.access_token)})
    );
  }
  getProfile() { // el interceptor se encarga de añadir el token
    return this.http.get<User>(`${this.apiUrl}/auth/profile`, {context: addTokenHeader()}).
    pipe(tap((user) => {
      console.log('AuthService getProfile: ', user);
      return this.user.next(user);
    }));
  }
  loginAndGetProfile(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.getProfile())
    )
  }
  logout(){
    this.tokenService.removeToken();
  }
}
