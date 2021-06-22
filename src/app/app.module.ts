import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HugoButtonComponent } from './hugo-button/hugo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HugoButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
