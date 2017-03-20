import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { UiComponent }  from './ui.component';
import { FormsModule }   from '@angular/forms';
import {LandingComponent} from './components/landing.component';

const appRoutes = [
  { path: '', component: LandingComponent },
]
    

@NgModule({
  imports:      [ 
                  RouterModule.forRoot(appRoutes, {useHash: true}),
                  BrowserModule,
                  FormsModule
                ],
  declarations: [ UiComponent, LandingComponent],
  bootstrap:    [ UiComponent ],
  providers: []
})
export class UiModule {}