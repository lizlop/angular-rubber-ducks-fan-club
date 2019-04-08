import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckDetailComponent } from './duck-detail.component';

describe('DuckDetailComponent', () => {
  let component: DuckDetailComponent;
  let fixture: ComponentFixture<DuckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
