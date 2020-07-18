import { TestBed } from '@angular/core/testing';

import { ExitSecretGuard } from './exit-secret.guard';

describe('ExitSecretGuard', () => {
  let guard: ExitSecretGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitSecretGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
