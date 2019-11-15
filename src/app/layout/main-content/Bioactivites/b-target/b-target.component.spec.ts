import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTargetComponent } from './b-target.component';

describe('BTargetComponent', () => {
  let component: BTargetComponent;
  let fixture: ComponentFixture<BTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
