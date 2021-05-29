import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

const componentes = [
  AppComponent,


]
const materia = [
  ScrollingModule,
]

@NgModule({
  declarations: [
    componentes,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    materia,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
