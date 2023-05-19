import { TestBed } from '@angular/core/testing';

import { AuthenticationStoreServiceImpl } from './authentication-store.service.impl';

describe('AuthenticationStoreServiceImpl', () => {
  let service: AuthenticationStoreServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationStoreServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
