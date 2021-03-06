import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _oidcSecurityService: OidcSecurityService,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._oidcSecurityService
      .isAuthenticated$
      .pipe(
        map((authenticated: boolean) => {
          if (!authenticated) {
            this._oidcSecurityService.authorize();
            return false;
          }
          return true;
        })
      );
  }
}
