import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaBodyComponent } from './teorema-body.component';

describe('TeoremaBodyComponent', () => {
  let component: TeoremaBodyComponent;
  let fixture: ComponentFixture<TeoremaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoremaBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
