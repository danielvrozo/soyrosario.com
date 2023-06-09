import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoComponent } from './gobierno.component';

describe('GobiernoComponent', () => {
  let component: GobiernoComponent;
  let fixture: ComponentFixture<GobiernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
