import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



import {MatTooltipModule} from '@angular/material/tooltip';




const appRoutes: Routes=[
  {path:'inicio',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTabsModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
