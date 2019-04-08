import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckSharingFormComponent } from './duck-sharing-form.component';

describe('DuckSharingFormComponent', () => {
  let component: DuckSharingFormComponent;
  let fixture: ComponentFixture<DuckSharingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckSharingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckSharingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
