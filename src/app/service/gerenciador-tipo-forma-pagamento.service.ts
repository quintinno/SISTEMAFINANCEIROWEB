import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoFormaPagamentoModel } from "../model/tipo-forma-pagamento-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoFormaPagamentoService {

  private URL_BASE_API_TIPO_FORMA_PAGAMENTO = "http://localhost:9090/forma-pagamento";

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoFormaPagamentoList() : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API_TIPO_FORMA_PAGAMENTO}`);
  }

  recuperarTipoFormaPagamentoAtivoList() : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API_TIPO_FORMA_PAGAMENTO}/ativo`);
  }

  // TODO --
  recuperarFormaPagamentoPessoaVinculoContaBancariaList( codigoResponsavelPagamento: number ) : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API_TIPO_FORMA_PAGAMENTO}/pessoa-vinculo-conta-bancaria/${codigoResponsavelPagamento}`);
  }

}
