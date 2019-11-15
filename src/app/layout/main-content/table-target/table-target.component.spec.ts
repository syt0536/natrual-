import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTargetComponent } from './table-target.component';

describe('TableTargetComponent', () => {
  let component: TableTargetComponent;
  let fixture: ComponentFixture<TableTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
