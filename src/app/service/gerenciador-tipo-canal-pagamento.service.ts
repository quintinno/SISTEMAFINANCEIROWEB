import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCanalPagamentoModel } from "../model/tipo-canal-pagamento-model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoCanalPagamentoService {

  private URL_BASE_API = environment.url_base_api_homologacao.concat("/tipo-canal-pagamento");

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoCanalPagamentoList() {
    return this.httpClient.get<TipoCanalPagamentoModel[]>(`${this.URL_BASE_API}`);
  }

}
