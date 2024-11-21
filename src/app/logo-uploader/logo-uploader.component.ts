import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-uploader',
  templateUrl: './logo-uploader.component.html',
  styleUrls: ['./logo-uploader.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LogoUploaderComponent {
  @Input() imageUrls: string[] = [];
  @Input() logoPrincipal: string | null = null;
  @Input() logoPdf: string | null = null;
  @Input() logoWkst: string | null = null;

  showModal: boolean = false;
  selectedLogoType: string = '';
  temporaryImage: string | ArrayBuffer | null = null;

  openModal(type: string) {
    this.selectedLogoType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.temporaryImage = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.temporaryImage = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveImage() {
    if (this.selectedLogoType === 'principal') {
      this.logoPrincipal = this.temporaryImage as string || '';
    } else if (this.selectedLogoType === 'pdf') {
      this.logoPdf = this.temporaryImage as string || '';
    } else if (this.selectedLogoType === 'wkst') {
      this.logoWkst = this.temporaryImage as string || '';
    }
    this.showModal = false;
    this.temporaryImage = null;
  }
}
