import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { PublicResourcesComponent } from './public-resources.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    PublicResourcesComponent
  ],
  exports: [
    PublicResourcesComponent
  ]
})
export class PublicResourcesModule { }
