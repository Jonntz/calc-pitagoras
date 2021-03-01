import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaFormComponent } from './teorema-form.component';

describe('TeoremaFormComponent', () => {
  let component: TeoremaFormComponent;
  let fixture: ComponentFixture<TeoremaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoremaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
