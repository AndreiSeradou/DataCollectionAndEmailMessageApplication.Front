import { TestBed } from '@angular/core/testing';

import { SibscriptionsService } from './sibscriptions.service';

describe('SibscriptionsService', () => {
  let service: SibscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SibscriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
