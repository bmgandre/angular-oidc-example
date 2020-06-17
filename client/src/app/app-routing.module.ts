import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivateResourcesComponent } from './private-resources/private-resources.component';
import { PublicResourcesComponent } from './public-resources/public-resources.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'private-resources',
    component: PrivateResourcesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'public-resources',
    component: PublicResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
