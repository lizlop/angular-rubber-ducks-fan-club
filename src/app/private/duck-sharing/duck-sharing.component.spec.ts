import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckSharingComponent } from './duck-sharing.component';

describe('DuckSharingComponent', () => {
  let component: DuckSharingComponent;
  let fixture: ComponentFixture<DuckSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
