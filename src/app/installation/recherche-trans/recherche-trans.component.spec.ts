import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTransComponent } from './recherche-trans.component';

describe('RechercheTransComponent', () => {
  let component: RechercheTransComponent;
  let fixture: ComponentFixture<RechercheTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
