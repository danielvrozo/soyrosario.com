import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaGetComponent } from './noticia-get.component';

describe('NoticiaGetComponent', () => {
  let component: NoticiaGetComponent;
  let fixture: ComponentFixture<NoticiaGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
