import { TestBed } from '@angular/core/testing';

import { GerenciadorConfiguracaoService } from './gerenciador-configuracao.service';

describe('GerenciadorConfiguracaoService', () => {
  let service: GerenciadorConfiguracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorConfiguracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
