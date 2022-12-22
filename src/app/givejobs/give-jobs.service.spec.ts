import { TestBed } from '@angular/core/testing';

import { GiveJobsService } from './give-jobs.service';

describe('GiveJobsService', () => {
  let service: GiveJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiveJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
