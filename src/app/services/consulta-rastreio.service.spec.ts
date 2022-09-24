import { TestBed } from '@angular/core/testing';

import { ConsultaRastreioService } from './consulta-rastreio.service';

describe('ConsultaRastreioService', () => {
  let service: ConsultaRastreioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaRastreioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
