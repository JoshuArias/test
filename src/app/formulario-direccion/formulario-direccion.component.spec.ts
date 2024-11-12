import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDireccionComponent } from './formulario-direccion.component';

describe('FormularioDireccionComponent', () => {
  let component: FormularioDireccionComponent;
  let fixture: ComponentFixture<FormularioDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDireccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
