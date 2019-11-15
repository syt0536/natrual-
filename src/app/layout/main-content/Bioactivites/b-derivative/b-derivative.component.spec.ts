import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDerivativeComponent } from './b-derivative.component';

describe('BDerivativeComponent', () => {
  let component: BDerivativeComponent;
  let fixture: ComponentFixture<BDerivativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDerivativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
