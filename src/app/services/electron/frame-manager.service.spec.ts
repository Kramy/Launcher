import { TestBed, inject } from '@angular/core/testing';

import { FrameManagerService } from './frame-manager.service';

describe('FrameManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameManagerService]
    });
  });

  it('should be created', inject([FrameManagerService], (service: FrameManagerService) => {
    expect(service).toBeTruthy();
  }));
});
