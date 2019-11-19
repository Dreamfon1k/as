import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { CanvasSidebarComponent } from './canvas-sidebar/canvas-sidebar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    CustomMaterialModule
  ],
  declarations: [ AppComponent, CanvasSidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
