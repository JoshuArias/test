import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Si usas [(ngModel)]
import { AppComponent } from './app.component';
import { LogoUploaderComponent } from './logo-uploader/logo-uploader.component';



@NgModule({
  declarations: [
    AppComponent, 
    LogoUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importa FormsModule si usas [(ngModel)]
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
