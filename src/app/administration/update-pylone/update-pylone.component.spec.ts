import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePyloneComponent } from './update-pylone.component';

describe('UpdatePyloneComponent', () => {
  let component: UpdatePyloneComponent;
  let fixture: ComponentFixture<UpdatePyloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePyloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePyloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
