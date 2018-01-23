import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CrisisListComponentComponent } from './conponent/crisis-list-component/crisis-list-component.component';
import { HeroDetailComponentComponent } from './conponent/hero-detail-component/hero-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponentComponent,
    HeroDetailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
