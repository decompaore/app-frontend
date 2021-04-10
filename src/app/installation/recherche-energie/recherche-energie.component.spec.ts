import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEnergieComponent } from './recherche-energie.component';

describe('RechercheEnergieComponent', () => {
  let component: RechercheEnergieComponent;
  let fixture: ComponentFixture<RechercheEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
