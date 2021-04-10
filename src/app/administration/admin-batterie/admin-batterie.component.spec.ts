import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatterieComponent } from './admin-batterie.component';

describe('AdminBatterieComponent', () => {
  let component: AdminBatterieComponent;
  let fixture: ComponentFixture<AdminBatterieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatterieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
