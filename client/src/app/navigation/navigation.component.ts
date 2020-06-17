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
    private oidcSecurityService: OidcSecurityService,
    public mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.oidcSecurityService.isAuthenticated$;
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

}
