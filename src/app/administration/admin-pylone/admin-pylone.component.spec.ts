import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPyloneComponent } from './admin-pylone.component';

describe('AdminPyloneComponent', () => {
  let component: AdminPyloneComponent;
  let fixture: ComponentFixture<AdminPyloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPyloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPyloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
