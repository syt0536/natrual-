import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRComponent } from './search-r.component';

describe('SearchRComponent', () => {
  let component: SearchRComponent;
  let fixture: ComponentFixture<SearchRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
