import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPromisesComponent } from './observables-promises.component';

describe('ObservablesPromisesComponent', () => {
  let component: ObservablesPromisesComponent;
  let fixture: ComponentFixture<ObservablesPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesPromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
