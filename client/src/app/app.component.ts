import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService
  ) { }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));
  }
}
