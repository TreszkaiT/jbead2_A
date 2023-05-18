import { TestBed } from '@angular/core/testing';

import { AuthenticationDataServiceImpl } from './authentication-data.service.impl';

describe('AuthenticationDataServiceImpl', () => {
  let service: AuthenticationDataServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationDataServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
