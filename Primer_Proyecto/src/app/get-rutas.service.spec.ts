import { TestBed } from '@angular/core/testing';

import { GetRutasService } from './get-rutas.service';

describe('GetRutasService', () => {
  let service: GetRutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
