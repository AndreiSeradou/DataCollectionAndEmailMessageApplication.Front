import { TestBed } from '@angular/core/testing';

import { AuthToRequestService } from './auth-to-request.service';

describe('AuthToRequestService', () => {
  let service: AuthToRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthToRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
