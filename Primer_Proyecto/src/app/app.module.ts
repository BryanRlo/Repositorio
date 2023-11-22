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
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatTableModule} from '@angular/material/table';
import { ClientesComponent } from './clientes/clientes.component';

import { HttpClientModule } from '@angular/common/http';



import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RutasComponent } from './rutas/rutas.component';

const appRoutes: Routes=[
  {path:'inicio',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'tabla',component:TablaComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'rutas',component:RutasComponent}

  

]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    MenuComponent,
    TablaComponent,
    ClientesComponent,
    RutasComponent
  ],
  imports: [
    HttpClientModule,
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
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,

    FormsModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
