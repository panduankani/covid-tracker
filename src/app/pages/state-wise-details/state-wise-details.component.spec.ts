import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseDetailsComponent } from './state-wise-details.component';

describe('StateWiseDetailsComponent', () => {
  let component: StateWiseDetailsComponent;
  let fixture: ComponentFixture<StateWiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
