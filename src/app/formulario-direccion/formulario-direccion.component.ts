import { Component, OnInit,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoUploaderComponent } from '../logo-uploader/logo-uploader.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-formulario-direccion',
  standalone: true,
  imports: [FormsModule, LogoUploaderComponent, CommonModule,],
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.css'],
})
export class FormularioDireccionComponent implements OnInit {
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
  logoPrincipal: string = '';
  logoPdf: string = '';
  logoWkst: string = '';
  estados: string[] = [];
  municipios: string[] = [];
  colonias: string[] = [];

  constructor(private apiService: ApiService) {}



  

  ngOnInit() {
    this.obtenerDetalles();
  }
  obtenerDetalles() {
    this.apiService.getDetails(this.rfc, this.nombre).subscribe(
      (data) => {
        console.log('Datos obtenidos de la API:', data);
        this.logoPrincipal = data[0]?.c9 || '';
        this.logoPdf = data[0]?.c10 || '';
        this.logoWkst = data[0]?.c11 || '';
        console.log('URL de logoWkst:', this.logoWkst);
        this.nombre = data[0].c2;
        this.rfc = data[0].c6;
        this.apoderado1Nombre = data[0].c5;
        this.apoderado1Rfc = data[0].c6;
        this.apoderado2Nombre = data[0].c7;
        this.apoderado2Rfc = data[0].c8;
      },
      (error) => {
        console.error('Error al obtener los detalles de la API:', error);
      }
    );
  }
  obtenerDatosPorCodigoPostal() {
    if (!this.codigoPostal) return;

    console.log('Enviando solicitud con código postal:', this.codigoPostal); 

    this.apiService.getCodigoPostal(this.codigoPostal).subscribe(
      (data: any[]) => {
        console.log('Respuesta de la API para el código postal:', data); 
        if (data && data.length > 0) {
          this.estados = [data[2][0].c2];
          this.municipios = [data[1][0].c2];
          this.colonias = data[0].map((item: any) => item.c2);
          this.pais = data[3][0].c2;
        } else {
          console.warn('La API devolvió datos vacíos o nulos.');
        }
        console.log('Colonias procesadas:', this.colonias);
      },
      (error) => {
        console.error('Error al obtener las opciones de dirección:', error);
      }
    );
  }
  onFocus(id: string): void {
    const label = document.querySelector(`label[for=${id}]`);
    if (label) {
      label.classList.add('focused');
    }
  }

  onBlur(id: string): void {
    const select = document.getElementById(id) as HTMLSelectElement;
    const label = document.querySelector(`label[for=${id}]`);
    if (label && select && !select.value) {
      label.classList.remove('focused');
    }
  }

  onSubmit() {
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      persona: this.persona,
      rfc: this.rfc,
      tipo: this.tipo,
      apoderado1: { nombre: this.apoderado1Nombre, rfc: this.apoderado1Rfc },
      apoderado2: { nombre: this.apoderado2Nombre, rfc: this.apoderado2Rfc },
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
      pais: this.pais,
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
      direccionDetalles: nuevaDireccion,
    };

    console.log('Información completa del formulario y dirección:', informacionCompleta);
    this.cerrarModal();
  }
}
