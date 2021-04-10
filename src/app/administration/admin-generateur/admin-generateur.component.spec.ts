import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateurComponent } from './admin-generateur.component';

describe('AdminGenerateurComponent', () => {
  let component: AdminGenerateurComponent;
  let fixture: ComponentFixture<AdminGenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
