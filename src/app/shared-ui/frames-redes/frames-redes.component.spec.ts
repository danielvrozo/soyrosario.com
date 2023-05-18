import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesRedesComponent } from './frames-redes.component';

describe('FramesRedesComponent', () => {
  let component: FramesRedesComponent;
  let fixture: ComponentFixture<FramesRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramesRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramesRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
