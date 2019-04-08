import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFormComponent } from './duck-form.component';

describe('DuckFormComponent', () => {
  let component: DuckFormComponent;
  let fixture: ComponentFixture<DuckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
