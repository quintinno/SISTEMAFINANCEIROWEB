import { TestBed } from '@angular/core/testing';

import { GerenciadorParcelamentoService } from './gerenciador-parcelamento.service';

describe('GerenciadorParcelamentoService', () => {
  let service: GerenciadorParcelamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorParcelamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
