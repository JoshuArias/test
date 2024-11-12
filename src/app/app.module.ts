import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Si usas [(ngModel)]
import { AppComponent } from './app.component';
import { LogoUploaderComponent } from './logo-uploader/logo-uploader.component';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';



@NgModule({
  declarations: [
    AppComponent, 
    LogoUploaderComponent,
    FormularioDireccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
