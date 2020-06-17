import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private _oidcSecurityService: OidcSecurityService,
    public _mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this._oidcSecurityService.isAuthenticated$;
  }

  login() {
    this._oidcSecurityService.authorize();
  }

  logout() {
    this._oidcSecurityService.logoff();
  }

}
