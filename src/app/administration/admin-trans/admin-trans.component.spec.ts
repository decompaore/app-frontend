import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransComponent } from './admin-trans.component';

describe('AdminTransComponent', () => {
  let component: AdminTransComponent;
  let fixture: ComponentFixture<AdminTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
