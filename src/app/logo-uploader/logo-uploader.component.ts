import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-uploader',
  templateUrl: './logo-uploader.component.html',
  styleUrls: ['./logo-uploader.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LogoUploaderComponent {
  showModal: boolean = false;
  selectedLogoType: string = '';
  temporaryImage: string | ArrayBuffer | null = null; // Imagen temporal para mostrar en el modal
  logoPrincipal: string | ArrayBuffer | null = null;
  logoPdf: string | ArrayBuffer | null = null;
  logoWkst: string | ArrayBuffer | null = null;

  openModal(type: string) {
    this.selectedLogoType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.temporaryImage = null; // Limpia la imagen temporal al cerrar el modal
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.temporaryImage = reader.result; // Guarda la imagen temporalmente para mostrar en el modal
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveImage() {
    // Guarda la imagen temporal en la propiedad correspondiente
    if (this.selectedLogoType === 'principal') {
      this.logoPrincipal = this.temporaryImage;
    } else if (this.selectedLogoType === 'pdf') {
      this.logoPdf = this.temporaryImage;
    } else if (this.selectedLogoType === 'wkst') {
      this.logoWkst = this.temporaryImage;
    }
    this.showModal = false; // Cierra el modal
    this.temporaryImage = null; // Limpia la imagen temporal después de guardar
  }
}
