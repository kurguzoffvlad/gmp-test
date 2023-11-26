import { TestBed } from '@angular/core/testing';

import { GmpTestService } from './gmp-test.service';

describe('GmpTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpTestService = TestBed.get(GmpTestService);
    expect(service).toBeTruthy();
  });
});
