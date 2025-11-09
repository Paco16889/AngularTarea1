import { TestBed } from '@angular/core/testing';

import { ServicdService } from './servicd.service';

describe('ServicdService', () => {
  let service: ServicdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
