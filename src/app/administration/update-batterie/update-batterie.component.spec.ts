import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBatterieComponent } from './update-batterie.component';

describe('UpdateBatterieComponent', () => {
  let component: UpdateBatterieComponent;
  let fixture: ComponentFixture<UpdateBatterieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBatterieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
