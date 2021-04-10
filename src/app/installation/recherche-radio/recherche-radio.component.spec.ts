import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheRadioComponent } from './recherche-radio.component';

describe('RechercheRadioComponent', () => {
  let component: RechercheRadioComponent;
  let fixture: ComponentFixture<RechercheRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
