import { TestBed } from '@angular/core/testing';

import { Dashboardv1Service } from './dashboardv1.service';

describe('Dashboardv1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dashboardv1Service = TestBed.get(Dashboardv1Service);
    expect(service).toBeTruthy();
  });
});
