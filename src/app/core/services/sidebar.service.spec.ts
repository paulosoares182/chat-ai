import { TestBed } from '@angular/core/testing';

import { sidebarService } from './sidebar.service';

describe('sidebarService', () => {
  let service: sidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(sidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
