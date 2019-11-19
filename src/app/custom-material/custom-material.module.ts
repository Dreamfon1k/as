import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatSidenavModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  declarations: [
  ],
  exports: [ 
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class CustomMaterialModule { }