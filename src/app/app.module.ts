import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { CasaComponent } from './casa/casa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//para obtener valores de control y validaciones de un formulario


@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    EditarComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
