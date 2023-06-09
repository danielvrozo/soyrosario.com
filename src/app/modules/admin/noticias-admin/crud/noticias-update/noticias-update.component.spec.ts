import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasUpdateComponent } from './noticias-update.component';

describe('NoticiasUpdateComponent', () => {
  let component: NoticiasUpdateComponent;
  let fixture: ComponentFixture<NoticiasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
