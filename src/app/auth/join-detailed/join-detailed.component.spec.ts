import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDetailedComponent } from './join-detailed.component';

describe('JoinDetailedComponent', () => {
  let component: JoinDetailedComponent;
  let fixture: ComponentFixture<JoinDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
