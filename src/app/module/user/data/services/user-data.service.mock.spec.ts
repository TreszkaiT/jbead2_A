import { TestBed } from '@angular/core/testing';

import { UserDataServiceMock } from './user-data.service.mock';

describe('UserDataServiceMock', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: UserDataServiceMock =
            TestBed.inject(UserDataServiceMock);

        expect(service).toBeTruthy();
    });
});
