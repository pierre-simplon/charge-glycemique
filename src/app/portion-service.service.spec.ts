import { TestBed } from '@angular/core/testing';

import { PortionServiceService } from './portion-service.service';

describe('PortionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortionServiceService = TestBed.get(PortionServiceService);
    expect(service).toBeTruthy();
  });
});
