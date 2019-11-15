import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCompoundComponent } from './b-compound.component';

describe('BCompoundComponent', () => {
  let component: BCompoundComponent;
  let fixture: ComponentFixture<BCompoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCompoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
