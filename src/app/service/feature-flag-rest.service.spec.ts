import { TestBed } from '@angular/core/testing';

import { FeatureFlagRestService } from './feature-flag-rest.service';

describe('FeatureFlagRestService', () => {
  let service: FeatureFlagRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureFlagRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
