import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoUploaderComponent } from './logo-uploader/logo-uploader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, LogoUploaderComponent]
})
export class AppComponent {
  // Variables del formulario
  nombre: string = '';
  persona: string = 'fisica';
  rfc: string = '';
  tipo: string = ''; // Agregada propiedad tipo
  apoderado1Nombre: string = '';
  apoderado1Rfc: string = '';
  apoderado2Nombre: string = '';
  apoderado2Rfc: string = '';
  mostrarModal: boolean = false; // Propiedad para controlar el modal
  direccion: string = '';
  numeroExterior: string = '';
  numeroInterior: string = '';
  colonia: string = '';
  municipio: string = '';
  estado: string = '';
  codigoPostal: string = '';
  pais: string = ''; // Propiedad añadida para el país
  direcciones: any[] = []; // Array para almacenar las direcciones

  // Método que se llama al enviar el formulario
  onSubmit() {
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      persona: this.persona,
      rfc: this.rfc,
      tipo: this.tipo, // Se asegura de incluir la propiedad tipo
      apoderado1: { nombre: this.apoderado1Nombre, rfc: this.apoderado1Rfc },
      apoderado2: { nombre: this.apoderado2Nombre, rfc: this.apoderado2Rfc }
    });
    alert('Formulario enviado exitosamente');
  }

  // Método para abrir el modal
  abrirModal() {
    console.log('Abriendo modal');
    this.mostrarModal = true;
  }

  // Método para cerrar el modal
  cerrarModal() {
    this.mostrarModal = false;
  }

  // Método para guardar la dirección y mostrar toda la información
  guardarDireccion() {
    const nuevaDireccion = {
      tipo: this.tipo,
      direccion: this.direccion,
      numeroExterior: this.numeroExterior,
      numeroInterior: this.numeroInterior,
      colonia: this.colonia,
      municipio: this.municipio,
      estado: this.estado,
      codigoPostal: this.codigoPostal,
      pais: this.pais // Se asegura de incluir el país
    };
    
    // Agrega la dirección al array de direcciones
    this.direcciones.push(nuevaDireccion);
    console.log('Dirección guardada:', nuevaDireccion);

    // Crea un objeto que combine toda la información
    const informacionCompleta = {
      nombre: this.nombre,
      persona: this.persona,
      rfc: this.rfc,
      tipo: this.tipo,
      apoderado1: { nombre: this.apoderado1Nombre, rfc: this.apoderado1Rfc },
      apoderado2: { nombre: this.apoderado2Nombre, rfc: this.apoderado2Rfc },
      direccionDetalles: nuevaDireccion
    };

    // Muestra toda la información en un JSON en la consola
    console.log('Información completa del formulario y dirección:', informacionCompleta);

    // Cierra el modal
    this.cerrarModal();
  }
}
