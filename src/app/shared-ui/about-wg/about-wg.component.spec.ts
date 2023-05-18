import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWgComponent } from './about-wg.component';

describe('AboutWgComponent', () => {
  let component: AboutWgComponent;
  let fixture: ComponentFixture<AboutWgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
