import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { CartaoBancarioModel } from "../model/cartao-bancario-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCartaoBancarioService {

  private URL_BASE_API_CARTAO_BANCARIO_CREDITO = environment.url_base_api_homologacao.concat("/cartao-bancario/recuperar-cartao-credito");
  private URL_BASE_API_CARTAO_BANCARIO_DEBITO = environment.url_base_api_homologacao.concat("/cartao-bancario/recuperar-cartao-debito");
  private URL_BASE_API_CARTAO_ALIEMENTACAO = environment.url_base_api_homologacao.concat("/cartao-bancario/recuperar-cartao-alimentacao");

  constructor( private httpClient: HttpClient  ) { }

  recuperarCartaoBancarioCreditoList() : Observable<CartaoBancarioModel[]> {
    return this.httpClient.get<CartaoBancarioModel[]>(`${this.URL_BASE_API_CARTAO_BANCARIO_CREDITO}`);
  }

  recuperarCartaoBancarioDebitoList() : Observable<CartaoBancarioModel[]> {
    return this.httpClient.get<CartaoBancarioModel[]>(`${this.URL_BASE_API_CARTAO_BANCARIO_DEBITO}`);
  }

  recuperarCartaoAlimentacaoList() : Observable<CartaoBancarioModel[]> {
    return this.httpClient.get<CartaoBancarioModel[]>(`${this.URL_BASE_API_CARTAO_ALIEMENTACAO}`);
  }

}
