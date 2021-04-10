import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheUsagerComponent } from './recherche-usager.component';

describe('RechercheUsagerComponent', () => {
  let component: RechercheUsagerComponent;
  let fixture: ComponentFixture<RechercheUsagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheUsagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
