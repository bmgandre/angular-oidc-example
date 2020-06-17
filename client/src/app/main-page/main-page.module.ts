import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
