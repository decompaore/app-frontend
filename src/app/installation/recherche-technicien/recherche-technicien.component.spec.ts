import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTechnicienComponent } from './recherche-technicien.component';

describe('RechercheTechnicienComponent', () => {
  let component: RechercheTechnicienComponent;
  let fixture: ComponentFixture<RechercheTechnicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTechnicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
