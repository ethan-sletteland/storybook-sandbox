import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImplementationComponent } from './button-implementation.component';

describe('ButtonImplementationComponent', () => {
  let component: ButtonImplementationComponent;
  let fixture: ComponentFixture<ButtonImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
