import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckAddComponent } from './duck-add.component';

describe('DuckAddComponent', () => {
  let component: DuckAddComponent;
  let fixture: ComponentFixture<DuckAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
