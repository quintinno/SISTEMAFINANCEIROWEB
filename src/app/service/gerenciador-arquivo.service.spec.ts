import { TestBed } from '@angular/core/testing';

import { GerenciadorArquivoService } from './gerenciador-arquivo.service';

describe('GerenciadorArquivoService', () => {
  let service: GerenciadorArquivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorArquivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
