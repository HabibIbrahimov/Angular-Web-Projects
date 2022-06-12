import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayphotoComponent } from './displayphoto/displayphoto.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayphotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
