import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HomeComponent}from "./Home/home.component";
import { CutCharPipe } from './cut-char.pipe';
import { HeaderComponent } from './header/header.component'
import{FormsModule, ReactiveFormsModule}from "@angular/forms";
import { MyFirstDirectiveDirective } from './my-first-directive.directive';
import { MyFirstPipePipe } from './my-first-pipe.pipe'
import{CustomFormsModule}from "ng2-validation"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CutCharPipe,
    HeaderComponent,
    MyFirstDirectiveDirective,
    MyFirstPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
