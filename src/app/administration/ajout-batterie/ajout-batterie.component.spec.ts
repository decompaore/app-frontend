import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBatterieComponent } from './ajout-batterie.component';

describe('AjoutBatterieComponent', () => {
  let component: AjoutBatterieComponent;
  let fixture: ComponentFixture<AjoutBatterieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutBatterieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
