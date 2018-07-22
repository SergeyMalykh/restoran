import { TestBed, inject } from '@angular/core/testing';

import { IlFornelloService } from './il-fornello.service';

describe('IlFornelloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IlFornelloService]
    });
  });

  it('should be created', inject([IlFornelloService], (service: IlFornelloService) => {
    expect(service).toBeTruthy();
  }));
});
