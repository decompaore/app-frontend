import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheGenerateurComponent } from './recherche-generateur.component';

describe('RechercheGenerateurComponent', () => {
  let component: RechercheGenerateurComponent;
  let fixture: ComponentFixture<RechercheGenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheGenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
