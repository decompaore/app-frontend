import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGenerateurComponent } from './ajout-generateur.component';

describe('AjoutGenerateurComponent', () => {
  let component: AjoutGenerateurComponent;
  let fixture: ComponentFixture<AjoutGenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
