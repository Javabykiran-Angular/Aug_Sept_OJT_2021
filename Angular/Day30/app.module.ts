import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { NgxCaptchaModule } from 'ngx-captcha';

import { ParticlesModule } from 'angular-particle'; 

import {  HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { TdfComponent } from './tdf/tdf.component';
import { ModalModule } from 'ngx-bootstrap/modal'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    AddemployeeComponent,
    EmployeDetailsComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // NgxCaptchaModule,
    ParticlesModule,
    HttpClientModule,
    ModalModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
