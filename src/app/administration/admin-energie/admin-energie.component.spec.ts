import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnergieComponent } from './admin-energie.component';

describe('AdminEnergieComponent', () => {
  let component: AdminEnergieComponent;
  let fixture: ComponentFixture<AdminEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
