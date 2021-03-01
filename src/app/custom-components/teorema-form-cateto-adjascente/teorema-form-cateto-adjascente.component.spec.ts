import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaFormCatetoAdjascenteComponent } from './teorema-form-cateto-adjascente.component';

describe('TeoremaFormCatetoAdjascenteComponent', () => {
  let component: TeoremaFormCatetoAdjascenteComponent;
  let fixture: ComponentFixture<TeoremaFormCatetoAdjascenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoremaFormCatetoAdjascenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaFormCatetoAdjascenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
