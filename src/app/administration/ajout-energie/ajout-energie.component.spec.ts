import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEnergieComponent } from './ajout-energie.component';

describe('AjoutEnergieComponent', () => {
  let component: AjoutEnergieComponent;
  let fixture: ComponentFixture<AjoutEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
