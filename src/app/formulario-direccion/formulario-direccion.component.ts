import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoUploaderComponent } from '../logo-uploader/logo-uploader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-direccion',
  standalone: true,
  imports: [FormsModule, LogoUploaderComponent, CommonModule],
  templateUrl: './formulario-direccion.component.html',
  styleUrl: './formulario-direccion.component.css'
})
export class FormularioDireccionComponent {
 // Variables del formulario
 nombre: string = '';
 persona: string = 'fisica';
 rfc: string = '';
 tipo: string = ''; 
 apoderado1Nombre: string = '';
 apoderado1Rfc: string = '';
 apoderado2Nombre: string = '';
 apoderado2Rfc: string = '';
 mostrarModal: boolean = false; 
 direccion: string = '';
 numeroExterior: string = '';
 numeroInterior: string = '';
 colonia: string = '';
 municipio: string = '';
 estado: string = '';
 codigoPostal: string = '';
 pais: string = ''; 
 direcciones: any[] = []; 

 
 onSubmit() {
   console.log('Formulario enviado:', {
     nombre: this.nombre,
     persona: this.persona,
     rfc: this.rfc,
     tipo: this.tipo, 
     apoderado1: { nombre: this.apoderado1Nombre, rfc: this.apoderado1Rfc },
     apoderado2: { nombre: this.apoderado2Nombre, rfc: this.apoderado2Rfc }
   });
   alert('Formulario enviado exitosamente');
 }

 
 abrirModal() {
   console.log('Abriendo modal');
   this.mostrarModal = true;
 }

 
 cerrarModal() {
   this.mostrarModal = false;
 }

 
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
     pais: this.pais 
   };
   
   
   this.direcciones.push(nuevaDireccion);
   console.log('Dirección guardada:', nuevaDireccion);

   
   const informacionCompleta = {
     nombre: this.nombre,
     persona: this.persona,
     rfc: this.rfc,
     tipo: this.tipo,
     apoderado1: { nombre: this.apoderado1Nombre, rfc: this.apoderado1Rfc },
     apoderado2: { nombre: this.apoderado2Nombre, rfc: this.apoderado2Rfc },
     direccionDetalles: nuevaDireccion
   };

   
   console.log('Información completa del formulario y dirección:', informacionCompleta);

   
   this.cerrarModal();
 }
}

