import { TestBed } from '@angular/core/testing';

import { HotelSearchService } from './hotel-search.service';

describe('HotelSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelSearchService = TestBed.get(HotelSearchService);
    expect(service).toBeTruthy();
  });
});
