import { TestBed } from '@angular/core/testing';

import { GerenciadorCategoriaDocumentoService } from './gerenciador-categoria-documento.service';

describe('GerenciadorCategoriaDocumentoService', () => {
  let service: GerenciadorCategoriaDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorCategoriaDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
