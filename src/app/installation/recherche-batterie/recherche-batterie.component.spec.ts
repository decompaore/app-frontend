import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBatterieComponent } from './recherche-batterie.component';

describe('RechercheBatterieComponent', () => {
  let component: RechercheBatterieComponent;
  let fixture: ComponentFixture<RechercheBatterieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBatterieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
