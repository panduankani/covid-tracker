import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistictWiseDetailsComponent } from './distict-wise-details.component';

describe('DistictWiseDetailsComponent', () => {
  let component: DistictWiseDetailsComponent;
  let fixture: ComponentFixture<DistictWiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistictWiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistictWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
