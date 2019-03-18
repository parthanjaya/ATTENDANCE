
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { Timer2Component } from './timer2/timer2.component';


//import { from } from 'rxjs';

@NgModule({
declarations: [
AppComponent,
HeaderComponent,

FooterComponent,
routingComponents,
Timer2Component,

],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { } 
 
