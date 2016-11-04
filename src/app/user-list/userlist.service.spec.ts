/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserlistService } from './userlist.service';

describe('Service: Userlist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserlistService]
    });
  });

  it('should ...', inject([UserlistService], (service: UserlistService) => {
    expect(service).toBeTruthy();
  }));
});
