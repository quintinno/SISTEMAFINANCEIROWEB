import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoBancarioModel } from "../model/cartao-bancario-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCartaoBancarioService {

  private URL_BASE_API_CARTAO_BANCARIO_CREDITO = "http://localhost:9090/cartao-bancario/recuperar-cartao-credito";

  private URL_BASE_API_CARTAO_BANCARIO_DEBITO = "http://localhost:9090/cartao-bancario/recuperar-cartao-debito";

  constructor( private httpClient: HttpClient  ) { }

  recuperarCartaoBancarioCreditoList() : Observable<CartaoBancarioModel[]> {
    return this.httpClient.get<CartaoBancarioModel[]>(`${this.URL_BASE_API_CARTAO_BANCARIO_CREDITO}`);
  }

  recuperarCartaoBancarioDebitoList() : Observable<CartaoBancarioModel[]> {
    return this.httpClient.get<CartaoBancarioModel[]>(`${this.URL_BASE_API_CARTAO_BANCARIO_DEBITO}`);
  }

}
