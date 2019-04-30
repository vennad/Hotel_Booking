import { TestBed, inject } from '@angular/core/testing';

import { NodeConsumeService } from './node-consume.service';

describe('NodeConsumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeConsumeService]
    });
  });

  it('should be created', inject([NodeConsumeService], (service: NodeConsumeService) => {
    expect(service).toBeTruthy();
  }));
});
