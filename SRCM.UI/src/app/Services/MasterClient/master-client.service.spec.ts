import { TestBed } from '@angular/core/testing';

import { MasterClientService } from './master-client.service';

describe('MasterClientService', () => {
  let service: MasterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
