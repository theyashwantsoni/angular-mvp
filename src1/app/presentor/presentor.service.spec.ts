import { TestBed } from '@angular/core/testing';

import { PresentorService } from './presentor.service';

describe('PresentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentorService = TestBed.get(PresentorService);
    expect(service).toBeTruthy();
  });
});
