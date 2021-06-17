import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProdutoServicoModel } from "../model/produto-servico-model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorProdutoServicoService {

  private URL_BASE_API = environment.url_base_api.concat("/produto-servico");

  constructor( private httpClient: HttpClient ) { }

  recuperarProdutoServicoList() : Observable<ProdutoServicoModel[]> {
    return this.httpClient.get<ProdutoServicoModel[]>(`${this.URL_BASE_API}`);
  }

  cadastrar( produtoServicoModelParameter: ProdutoServicoModel ) : Observable<Object> {
    return this.httpClient.post<ProdutoServicoModel>(`${this.URL_BASE_API}`, produtoServicoModelParameter);
  }

}
