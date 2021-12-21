import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { NgxCaptchaModule } from 'ngx-captcha';

import { ParticlesModule } from 'angular-particle'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // NgxCaptchaModule,
    ParticlesModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
