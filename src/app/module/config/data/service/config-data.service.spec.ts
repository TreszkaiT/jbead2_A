import { TestBed } from '@angular/core/testing';

import { ConfigDataServiceMock } from './config-data.service.mock';

describe('ConfigDataService', () => {
  let service: ConfigDataServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigDataServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
