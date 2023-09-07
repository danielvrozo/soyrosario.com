import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaitanOrdenComponent } from './gaitan-orden.component';

describe('GaitanOrdenComponent', () => {
  let component: GaitanOrdenComponent;
  let fixture: ComponentFixture<GaitanOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaitanOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaitanOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
