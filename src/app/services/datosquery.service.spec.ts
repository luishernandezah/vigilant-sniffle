import { TestBed } from '@angular/core/testing';

import { DatosqueryService } from './datosquery.service';

describe('DatosqueryService', () => {
  let service: DatosqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
