import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreBodyComponent } from './sobre-body.component';

describe('SobreBodyComponent', () => {
  let component: SobreBodyComponent;
  let fixture: ComponentFixture<SobreBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
