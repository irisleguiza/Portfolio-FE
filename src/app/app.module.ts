import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HardskillComponent } from './component/hardskill/hardskill.component';
import { SoftskillComponent } from './component/softskill/softskill.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { FooterComponent } from './component/footer/footer.component';
import { AcercademiComponent } from './component/acercademi/acercademi.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EducacionComponent,
    HardskillComponent,
    SoftskillComponent,
    ProyectosComponent,
    ExperienciaComponent,
    FooterComponent,
    AcercademiComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
