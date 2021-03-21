import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCanalPagamentoModel } from "../model/tipo-canal-pagamento-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoCanalPagamentoService {

  private URL_BASE_API_TIPO_CANAL_PAGAMENTO = "http://localhost:9090/tipo-canal-pagamento";

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoCanalPagamentoList() {
    return this.httpClient.get<TipoCanalPagamentoModel[]>(`${this.URL_BASE_API_TIPO_CANAL_PAGAMENTO}`);
  }

}
