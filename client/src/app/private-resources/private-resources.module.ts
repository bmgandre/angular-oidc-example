import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { PrivateResourcesComponent } from './private-resources.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    PrivateResourcesComponent
  ],
  exports: [
    PrivateResourcesComponent
  ]
})
export class PrivateResourcesModule { }
