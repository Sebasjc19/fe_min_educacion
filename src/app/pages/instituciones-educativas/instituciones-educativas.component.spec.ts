import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesEducativasComponent } from './instituciones-educativas.component';

describe('InstitucionesEducativasComponent', () => {
  let component: InstitucionesEducativasComponent;
  let fixture: ComponentFixture<InstitucionesEducativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionesEducativasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionesEducativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
