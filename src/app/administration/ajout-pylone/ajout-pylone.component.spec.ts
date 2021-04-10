import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPyloneComponent } from './ajout-pylone.component';

describe('AjoutPyloneComponent', () => {
  let component: AjoutPyloneComponent;
  let fixture: ComponentFixture<AjoutPyloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPyloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPyloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
