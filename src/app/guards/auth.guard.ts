import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    // private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user$
      .pipe(
        map( user => {
          if (!user){
            this.router.navigate(['/home']);
            return false;
          }
          console.log("auth.guard: ", user)
          return true;
        })
      )

    }
}