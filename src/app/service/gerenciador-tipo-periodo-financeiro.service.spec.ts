import { TestBed } from '@angular/core/testing';

import { GerenciadorTipoPeriodoFinanceiroService } from './gerenciador-tipo-periodo-financeiro.service';

describe('GerenciadorTipoPeriodoFinanceiroService', () => {
  let service: GerenciadorTipoPeriodoFinanceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorTipoPeriodoFinanceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
