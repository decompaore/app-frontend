import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnergieComponent } from './update-energie.component';

describe('UpdateEnergieComponent', () => {
  let component: UpdateEnergieComponent;
  let fixture: ComponentFixture<UpdateEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
