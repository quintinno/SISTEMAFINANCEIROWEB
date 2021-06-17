import { TestBed } from '@angular/core/testing';

import { GerenciadorAutenticacaoService } from './gerenciador-autenticacao.service';

describe('GerenciadorAutenticacaoService', () => {
  let service: GerenciadorAutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorAutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
