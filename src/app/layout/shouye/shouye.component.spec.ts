import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouyeComponent } from './shouye.component';

describe('ShouyeComponent', () => {
  let component: ShouyeComponent;
  let fixture: ComponentFixture<ShouyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
