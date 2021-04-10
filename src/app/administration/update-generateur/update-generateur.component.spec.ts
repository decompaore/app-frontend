import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGenerateurComponent } from './update-generateur.component';

describe('UpdateGenerateurComponent', () => {
  let component: UpdateGenerateurComponent;
  let fixture: ComponentFixture<UpdateGenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
