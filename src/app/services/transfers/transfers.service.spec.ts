import { TestBed } from '@angular/core/testing';

import { TransfersService } from './transfers.service';
import { HttpClientModule } from '@angular/common/http';

describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule
    ]
  }));
  

  it('should be created', () => {
    const service: TransfersService = TestBed.get(TransfersService);
    expect(service).toBeTruthy();
  });
});
