import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTransComponent } from './ajout-trans.component';

describe('AjoutTransComponent', () => {
  let component: AjoutTransComponent;
  let fixture: ComponentFixture<AjoutTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
