import { TestBed } from '@angular/core/testing';

import { CostumPreloadService } from './costum-preload.service';

describe('CostumPreloadService', () => {
  let service: CostumPreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
