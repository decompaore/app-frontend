import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRadioComponent } from './ajout-radio.component';

describe('AjoutRadioComponent', () => {
  let component: AjoutRadioComponent;
  let fixture: ComponentFixture<AjoutRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
