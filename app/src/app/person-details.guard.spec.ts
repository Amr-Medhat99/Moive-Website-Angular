import { TestBed } from '@angular/core/testing';

import { PersonDetailsGuard } from './person-details.guard';

describe('PersonDetailsGuard', () => {
  let guard: PersonDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
