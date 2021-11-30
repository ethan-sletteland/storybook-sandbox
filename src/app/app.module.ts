import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonImplementationComponent } from './components/button-implementation/button-implementation.component';
import ButtonComponent from "../stories/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    // stories
    ButtonComponent,
    // implementations
    ButtonImplementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
