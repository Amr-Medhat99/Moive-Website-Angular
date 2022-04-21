import { TestBed } from '@angular/core/testing';

import { PersonDetails2Guard } from './person-details2.guard';

describe('PersonDetails2Guard', () => {
  let guard: PersonDetails2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonDetails2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
