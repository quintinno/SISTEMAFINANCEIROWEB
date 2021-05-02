import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoFormaPagamentoModel } from "../model/tipo-forma-pagamento-model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoFormaPagamentoService {

  private URL_BASE_API = environment.url_base_api_homologacao.concat("/forma-pagamento");

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoFormaPagamentoList() : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API}`);
  }

  recuperarTipoFormaPagamentoAtivoList() : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API}/ativo`);
  }

  recuperarFormaPagamentoPessoaVinculoContaBancariaList( codigoResponsavelPagamento: number ) : Observable<TipoFormaPagamentoModel[]> {
    return this.httpClient.get<TipoFormaPagamentoModel[]>(`${this.URL_BASE_API}/pessoa-vinculo-conta-bancaria/${codigoResponsavelPagamento}`);
  }

}
