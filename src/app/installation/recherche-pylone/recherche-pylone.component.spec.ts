import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePyloneComponent } from './recherche-pylone.component';

describe('RecherchePyloneComponent', () => {
  let component: RecherchePyloneComponent;
  let fixture: ComponentFixture<RecherchePyloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePyloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePyloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
