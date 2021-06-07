import { TestBed } from '@angular/core/testing';

import { GerenciadorDocumentoService } from './gerenciador-documento.service';

describe('GerenciadorDocumentoService', () => {
  let service: GerenciadorDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
