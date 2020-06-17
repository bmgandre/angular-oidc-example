import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { NavigationModule } from './navigation/navigation.module';
import { PrivateResourcesModule } from './private-resources/private-resources.module';
import { PublicResourcesModule } from './public-resources/public-resources.module';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      stsServer: 'http://localhost:5000',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'angular_spa',
      scope: 'openid profile email',
      responseType: 'code',
      silentRenew: true,
      silentRenewUrl: `${window.location.origin}/silent-renew.html`,
      logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    PrivateResourcesModule,
    PublicResourcesModule,
    MainPageModule,
    AppRoutingModule
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
