import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckUpdateComponent } from './duck-update.component';

describe('DuckUpdateComponent', () => {
  let component: DuckUpdateComponent;
  let fixture: ComponentFixture<DuckUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
