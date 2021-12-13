import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonImplementationComponent } from './components/button-implementation/button-implementation.component';
import ButtonComponent from "../stories/button/button.component";
import HeaderComponent from "../stories/header/header.component";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // stories
    HeaderComponent,
    ButtonComponent,
    // implementations
    ButtonImplementationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
