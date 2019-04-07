import { TestBed, async, inject } from '@angular/core/testing';

import { JoinGuard } from './join.guard';

describe('JoinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoinGuard]
    });
  });

  it('should ...', inject([JoinGuard], (guard: JoinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
