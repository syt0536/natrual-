import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompoundComponent } from './table-compound.component';

describe('TableCompoundComponent', () => {
  let component: TableCompoundComponent;
  let fixture: ComponentFixture<TableCompoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCompoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
