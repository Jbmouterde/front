import { TestBed, inject } from '@angular/core/testing';

import { DowloadService } from './dowload.service';

describe('DowloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DowloadService]
    });
  });

  it('should be created', inject([DowloadService], (service: DowloadService) => {
    expect(service).toBeTruthy();
  }));
});
