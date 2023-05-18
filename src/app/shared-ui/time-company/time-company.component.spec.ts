import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCompanyComponent } from './time-company.component';

describe('TimeCompanyComponent', () => {
  let component: TimeCompanyComponent;
  let fixture: ComponentFixture<TimeCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
