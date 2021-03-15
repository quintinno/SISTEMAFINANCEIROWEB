import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProdutoServicoModel } from "../model/produto-servico-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorProdutoServicoService {

  private URL_API_BASE_PRODUTO_SERVICO = "http://localhost:9090/produto-servico";

  constructor( private httpClient: HttpClient ) { }

  recuperarProdutoServicoList() : Observable<ProdutoServicoModel[]> {
    return this.httpClient.get<ProdutoServicoModel[]>(`${this.URL_API_BASE_PRODUTO_SERVICO}`);
  }

}
