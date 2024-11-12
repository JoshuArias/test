import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoUploaderComponent } from './logo-uploader/logo-uploader.component';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, LogoUploaderComponent, FormularioDireccionComponent]
})
export class AppComponent {
 
}